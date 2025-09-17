"use client";
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import { PiHouseLine, PiNavigationArrow } from "react-icons/pi";
import { ArrowLeft } from "lucide-react";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

// default Leaflet icon
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// ===================
// Subcomponents
// ===================

// Suggestions dropdown
const SuggestionsList = ({ suggestions, onSelect }) => {
  if (!suggestions.length) return null;
  return (
    <ul className="absolute bg-white border rounded-md shadow-md w-full mt-1 max-h-40 overflow-y-auto z-50">
      {suggestions.map((suggestion, i) => (
        <li
          key={i}
          className="px-2 py-1 cursor-pointer hover:bg-green-500/20 text-sm"
          onClick={() => onSelect(suggestion)}
        >
          {suggestion.display_name}
        </li>
      ))}
    </ul>
  );
};

// AddressInput
const AddressInput = ({ value, setValue, setMarker }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState(""); //  for fetching

  // fetch suggestions when typing
  useEffect(() => {
    if (!query || query.length <= 3) {
      setSuggestions([]);
      return;
    }

    const handler = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://us1.locationiq.com/v1/autocomplete.php?key=${
            import.meta.env.VITE_LOCATIONIQ_KEY
          }&q=${query}&format=json&limit=5`
        );
        const data = await res.json();
        setSuggestions(data);
      } catch (err) {
        console.error("Autocomplete fetch failed", err);
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [query]);

  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
        <PiNavigationArrow color="green" strokeWidth={2.5} />
      </span>
      <input
        type="text"
        placeholder="Delivery Address"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setQuery(e.target.value);
        }}
        className="border rounded-lg p-2 w-full pl-10 text-sm placeholder:text-green-700/30"
      />

      {suggestions.length > 0 && (
        <ul className="absolute bg-white border rounded-md shadow-md w-full mt-1 max-h-40 overflow-y-auto z-50">
          {suggestions.map((s, i) => (
            <li
              key={i}
              className="px-2 py-1 cursor-pointer hover:bg-green-500/20 text-sm"
              onClick={() => {
                setValue(s.display_name);
                setMarker({ lat: parseFloat(s.lat), lng: parseFloat(s.lon) });
                setSuggestions([]);
              }}
            >
              {s.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Notes input
const NotesInput = ({ value, setValue }) => (
  <div className="relative ">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
      <PiHouseLine color="green" strokeWidth={2.5} />
    </span>
    <input
      type="text"
      placeholder="Floor, Door, Notes"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="border rounded-lg p-2 w-full pl-10 text-sm  placeholder:text-green-700/30"
    />
  </div>
);

// Map recenter on marker change
const RecenterMap = ({ marker }) => {
  const map = useMap();
  useEffect(() => {
    if (marker) {
      map.setView([marker.lat, marker.lng], 15, { animate: true });
    }
  }, [marker, map]);
  return null;
};

// Map click handler to drop marker + reverse geocode
const LocationMarker = ({ setMarker, setAddress, mapPicking }) => {
  useMapEvents({
    click: async (e) => {
      if (!mapPicking) return;
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
const NewAddressForm = ({ setAddresses, addresses, setStep }) => {
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [marker, setMarker] = useState({ lat: 6.5244, lng: 3.3792 }); // Lagos

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!deliveryAddress.trim()) {
      alert("Please enter a delivery address.");
      return;
    }
    if (!addresses.includes(deliveryAddress)) {
      setAddresses((prev) => [...prev, deliveryAddress]);
    }
    setStep("list");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[500px]">
      {/* Left - Form */}
      <div className="px-4 flex flex-col gap-4">
        {/* Back Button */}
        <button
          type="button"
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 w-fit mb-6"
          onClick={() => setStep("list")}
        >
          <ArrowLeft size={18} /> Back
        </button>

        <form className="flex flex-col gap-3 flex-1" onSubmit={handleSubmit}>
          <p className="text-xs text-green-600 text-left  font-bold">
            ** Enter address manually or pick a location on the map
          </p>
          <AddressInput
            value={deliveryAddress}
            setValue={setDeliveryAddress}
            setMarker={setMarker}
          />

          <NotesInput value={notes} setValue={setNotes} />

          <button
            type="submit"
            className=" bg-green-600 text-white rounded-lg py-2 hover:bg-green-700 transition mt-[80px]"
          >
            Confirm Address
          </button>
        </form>
      </div>

      {/* Right - Map */}
      <div className="h-full w-full">
        <MapContainer
          center={marker}
          zoom={13}
          className="h-full w-full rounded-xl"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          />
          <Marker position={marker} />
          <RecenterMap marker={marker} />
          <LocationMarker
            setMarker={setMarker}
            setAddress={setDeliveryAddress}
            mapPicking={true}
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default NewAddressForm;
