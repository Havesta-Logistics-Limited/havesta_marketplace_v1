import React from "react";
import heroBg from "../../../assets/venhero-bg.svg";

import Profile from "./Profile";
import Order from "./Order";

const VendorHome = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "40vh",
      }}
      className="relative"
    >
      {/* Profile part */}
      <Profile />
      {/* order part */}
      <Order />
    </div>
  );
};

export default VendorHome;
