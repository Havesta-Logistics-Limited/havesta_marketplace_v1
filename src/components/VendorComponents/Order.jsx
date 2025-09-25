import React from "react";
import astronaut from "../../assets/astronaut.svg";
import AddedProductsOrder from "./AddedProductsOrder";
const Order = ({ setCart }) => {
  return (
    <div className=" absolute top-36 right-24 lg:right-16 xl:right-12 2xl:right-14  ">
      <div className=" relative flex  flex-col items-center text-white  bg-primary h-[450px] z-30  lg:w-[25vw] xl:w-[20vw]  2xl:w-[19vw] rounded-2xl px-6 min-w-[250px]">
        {/* Text area */}
        <div className=" relative z-10 text-white py-6">
          <h1 className="font-bold text-center text-lg ">Your Order</h1>
        </div>
        {/* <img src={astronaut} alt="" className="m-auto mt-12 w-48" /> */}
        {/* order shows here */}
        <AddedProductsOrder />

        {/* coming bac to here to correct things */}

        <p className="text-center font-light text-sm max-w-[12rem]  m-auto mb-0 absolute bottom-20">
          Add products to Cart and you'll see them here!
        </p>
        <div className="py-5 border-t-2 border-t-white border-opacity-20 absolute bottom-0 px-2  ">
          <p className=" text-xs text-center max-w-[15rem] m-auto ">
            Order <span className=" font-bold">₦4,000</span> worth of products
            and save <span className=" font-bold">₦500</span> in fees!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
