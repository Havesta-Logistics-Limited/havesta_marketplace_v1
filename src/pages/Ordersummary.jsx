// src/pages/Ordersummary.jsx
import OrderSummarySection from "../components/OrderSummarySection";
import DeliveryDetails from "../components/DeliveryDetails";
import PaymentMethod from "../components/PaymentMethod";
import SummaryPanel from "../components/SummaryPanel";

const Ordersummary = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Order Details */}
          <div className="lg:col-span-2 space-y-8">
            <OrderSummarySection />
            <DeliveryDetails />
            <PaymentMethod />
          </div>

          {/* Right Column: Summary Panel  */}
          <div className="lg:col-span-1 sticky top-24">
            <SummaryPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordersummary;
