import { useCallback, useState } from "react";
import { Search } from "lucide-react";
import { vendors } from "../../../data/data";
import VendorCard from "../../../components/VendorCard";

export default function Vendors() {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleVendors, setVisibleVendors] = useState(9);
  const [vendorData, setVendorData] = useState(vendors);

  const handleToggleFavorite = useCallback(
    (vendorId) => {
      setVendorData((prevVendors) =>
        prevVendors.map((vendor) =>
          vendor.id === vendorId
            ? { ...vendor, isFavorite: !vendor.isFavorite }
            : vendor
        )
      );
    },
    [setVendorData]
  );
  const handleShowMore = () => {
    setVisibleVendors((prev) => Math.min(prev + 6, vendorData.length));
  };

  const filteredVendors = vendorData.filter((vendor) =>
    vendor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedVendors = filteredVendors.slice(0, visibleVendors);

  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with Search */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">All Vendors</h2>

          {/* Search Bar */}
          <div className="relative w-80">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-green-500 hover:bg-green-600 flex items-center justify-center rounded-r-lg">
              <Search size={18} className="text-white" />
            </button>
          </div>
        </div>

        {/* Vendors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedVendors.map((vendor) => (
            <VendorCard
              key={vendor.id}
              {...vendor}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>

        {/* Show More Button */}
        {visibleVendors < filteredVendors.length && (
          <div className="flex justify-center">
            <button
              onClick={handleShowMore}
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Show More
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredVendors.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No vendors found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
