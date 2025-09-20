import React from "react";
import roundwoman from "../../../assets/roundwoman.svg";
import whitecar from "../../../assets/whitecar.svg";
import whiteclock from "../../../assets/whiteclock.svg";
import pattern from "../../../assets/pattern.png";
import { FaStar } from "react-icons/fa";
const Profile = () => {
  return (
    <div className="absolute lg:w-[58vw] xl:w-[68vw] rounded-tr-[4rem] top-36 left-16 z-30  ">
      <div className=" relative ">
        {/* Pattern */}
        <div
          className="absolute inset-0 rounded-tr-[4.2rem]"
          style={{
            backgroundImage: `url(${pattern})`, // Use the imported pattern
            backgroundRepeat: "repeat",
            backgroundSize: "20%",
          }}
        ></div>
        {/* Green Overlay */}
        <div className="absolute inset-0 bg-primary opacity-90 rounded-tr-[4rem]"></div>

        {/* text area */}
        <div className=" z-10 relative text-white pt-20 pb-9 px-8">
          <img
            src={roundwoman}
            alt="roundwoman"
            className="absolute lg:-top-16 w-36 lg:w-28 xl:w-32 xl:-top-20"
          />
          <div>
            <h1 className="font-bold text-lg  ">HERITAGE FRUITS</h1>
            <p className="text-sm font-light  ">
              Closes by 8pm | Instant Delivery & Pre-Order
            </p>
            <div className="flex items-center text-sm font-light mb-6 ">
              <FaStar className="text-[#FCAF23] mr-1" />
              <p>5.0 (Top Rated) |</p>
              <div className="h-4 w-4  rounded-full bg-harvestaLightGreen mx-1"></div>
              <p>Online</p>
            </div>

            <div className="pacifico flex gap-2 text-xl">
              <img src={whitecar} alt="" className=" w-16" />
              <p>From ₦500 </p>
              <img src={whiteclock} alt="" className="w-6" />
              <p>15 - 30min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
