import VendorHome from "./components/VendorHome";
import VendorExplore from "./components/VendorExplore";
import VendorPromoDeals from "./components/PromoDeals";
import VendorCategories from "./components/VendorCategories";
import StoreModal from "../../components/Modals/StoreModal";

const VendorPage = () => {
  return (
    <div>
      <VendorHome />
      <VendorExplore />
      <VendorPromoDeals />
      <VendorCategories />
      <StoreModal />
    </div>
  );
};

export default VendorPage;
