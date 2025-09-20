"use client";
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import { Gift, MapPin, Timer, Calendar } from "lucide-react";
import { TicketPercent } from "lucide-react";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

// ===================
// Default Marker Icon
// ===================
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// ===================
// Helpers
// ===================
const RecenterMap = ({ marker }) => {
  const map = useMap();
  useEffect(() => {
    if (marker) {
      map.setView([marker.lat, marker.lng], 15, { animate: true });
    }
  }, [marker, map]);
  return null;
};

const LocationMarker = ({ setMarker, setAddress }) => {
  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      setMarker({ lat, lng });

      try {
        const res = await fetch(
          `https://us1.locationiq.com/v1/reverse.php?key=${
            import.meta.env.VITE_LOCATIONIQ_KEY
          }&lat=${lat}&lon=${lng}&format=json`
        );
        const data = await res.json();
        if (data?.display_name) setAddress(data.display_name);
      } catch (err) {
        console.error("Reverse geocoding failed", err);
      }
    },
  });
  return null;
};

// ===================
// Main Component
// ===================
const DeliveryDetails = () => {
  const [address, setAddress] = useState("");
  const [marker, setMarker] = useState({ lat: 6.5244, lng: 3.3792 }); // Lagos
  const [selected, setSelected] = useState("instant"); // default delivery option

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900">Delivery Details</h3>

      {/* Map + Address */}
      <div className="mt-4">
        <div className="h-48 w-full rounded-lg overflow-hidden mb-3">
          <MapContainer
            center={marker}
            zoomControl={false}
            className="h-full w-full rounded-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            />
            <Marker position={marker} />
            <RecenterMap marker={marker} />
            <LocationMarker setMarker={setMarker} setAddress={setAddress} />
          </MapContainer>
        </div>

        {/* Address Input */}
        <div className="mt-2 p-3 border border-gray-200 rounded-lg flex items-center">
          <MapPin className="w-5 h-5 text-gray-600 mr-2" />
          <input
            type="text"
            placeholder="Enter delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="flex-1 text-sm border-none focus:ring-0 outline-none"
          />
        </div>

        {/* Gift Option */}
        <div className="mt-3 p-3 border border-gray-200 rounded-lg flex items-center">
          <Gift className="w-5 h-5 text-gray-600 mr-2" />
          <span className="text-sm">Click here to gift someone</span>
        </div>

        {/* Delivery Time */}
        <div className="mt-3 flex space-x-4">
          {/* Instant Delivery */}
          <button
            type="button"
            onClick={() => setSelected("instant")}
            className={`flex-1 p-3 rounded-lg flex items-center cursor-pointer border ${
              selected === "instant"
                ? "border-yellow-200 bg-yellow-50"
                : "border-gray-200 bg-white"
            }`}
          >
            <Timer
              className={`w-4 h-4 mr-2 ${
                selected === "instant" ? "text-yellow-600" : "text-black-500"
              }`}
            />
            <span className="text-sm text-left">
              15 - 30min
              <br />
              <span className="font-medium">Instant Delivery</span>
            </span>
            {selected === "instant" && (
              <span className="ml-auto text-green-600">✅</span>
            )}
          </button>

          {/* Schedule Delivery */}
          <button
            type="button"
            onClick={() => setSelected("schedule")}
            className={`flex-1 p-3 rounded-lg flex items-center cursor-pointer border ${
              selected === "schedule"
                ? "border-yellow-200 bg-yellow-50"
                : "border-gray-200 bg-white"
            }`}
          >
            <Calendar
              className={`w-4 h-4 mr-2 ${
                selected === "schedule" ? "text-yellow-600" : "text-black-500"
              }`}
            />
            <span className="text-sm text-left">
              24h - 48hrs
              <br />
              <span className="font-medium">Schedule Delivery</span>
            </span>
            {selected === "schedule" && (
              <span className="ml-auto text-green-600">✅</span>
            )}
          </button>
        </div>

       

{/* Promo Code */}
<div className="mt-3 p-3 border border-black-600 rounded-lg">
  <div className="flex items-center">
    <TicketPercent className="w-5 h-5 text-gray-500 mr-2" />
    <input
      type="text"
      placeholder="Enter promo code"
      className="flex-1 text-sm border-none focus:ring-0 outline-none"
    />
  </div>
</div>
</div>
</div>
  );
};

export default DeliveryDetails;
