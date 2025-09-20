import React, { useState, useRef, useEffect } from "react";
// import veggiewoman from "../../assets/veggiewoman.svg";
import chicken from "../../../assets/chicken.svg";
import dryvegetable from "../../../assets/dryvegetable.svg";
import apple from "../../../assets/apple.svg";
import tubers from "../../../assets/tubers.svg";
import rice from "../../../assets/rice.svg";
import palmoil from "../../../assets/palmoil.svg";
import soupcondiment from "../../../assets/soupcondiment.svg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const VendorExplore = () => {
  // --- data
  const categories = [
    {
      id: 0,
      image: chicken,
      name: "Frozen Food",
      noOfItems: 20,
      bg: "#DEF9EC",
    },
    {
      id: 1,
      image: dryvegetable,
      name: "Vegetables",
      noOfItems: 30,
      bg: "#ECFFEC",
    },
    { id: 2, image: apple, name: "Fruits", noOfItems: 10, bg: "#F2FCE4" },
    { id: 3, image: tubers, name: "Tubers", noOfItems: 40, bg: "#FEEFEA" },
    {
      id: 4,
      image: rice,
      name: "Grains & Flour",
      noOfItems: 23,
      bg: "#ECFFEC",
    },
    {
      id: 5,
      image: palmoil,
      name: "Oil & Seasoning",
      noOfItems: 10,
      bg: "#FFFCEB",
    },
    {
      id: 6,
      image: soupcondiment,
      name: "Soup Condiments",
      noOfItems: 19,
      bg: "#ECFFEC",
    },
    { id: 7, image: tubers, name: "Tubers", noOfItems: 40, bg: "#FEEFEA" },
    {
      id: 8,
      image: rice,
      name: "Grains & Flour",
      noOfItems: 23,
      bg: "#ECFFEC",
    },
    {
      id: 9,
      image: palmoil,
      name: "Oil & Seasoning",
      noOfItems: 10,
      bg: "#FFFCEB",
    },
    {
      id: 10,
      image: soupcondiment,
      name: "Soup Condiments",
      noOfItems: 19,
      bg: "#ECFFEC",
    },
  ];

  // --- refs & state
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0); // visible viewport width (px)
  const [index, setIndex] = useState(0); // current scroll index (number of items scrolled)
  const MIN_ITEM_WIDTH = 180; // smallest item width we want in px (you can tweak)

  // measure container width responsively using ResizeObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => setContainerWidth(el.getBoundingClientRect().width);
    update();

    const ro = new ResizeObserver(() => update());
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // compute how many items fit in the visible container (integer >= 1)
  const GAP = 12; // pixels (gap-3 = 0.75rem = 12px)
  const visibleCount = Math.max(
    1,
    Math.floor(containerWidth / (MIN_ITEM_WIDTH + GAP))
  );

  // total width available for items (excluding gaps)
  const totalItemSpace = containerWidth - GAP * (visibleCount - 1);

  // exact width for each card
  const itemWidth = totalItemSpace / visibleCount;

  // the furthest index we can scroll to so the last item is visible
  const maxIndex = Math.max(0, categories.length - visibleCount);

  // if visibleCount changes (resize), ensure index is within allowed range
  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  // navigation handlers (clamp inside allowed range)
  const handleNext = () => setIndex((prev) => Math.min(prev + 1, maxIndex));
  const handlePrev = () => setIndex((prev) => Math.max(prev - 1, 0));

  // translate in pixels. trackWidth = categories.length * itemWidth
  // track width must also include gaps
  const trackWidth =
    categories.length * itemWidth + GAP * (categories.length - 1);

  // translateX must include gaps as well
  const trackTransform = `translateX(-${index * (itemWidth + GAP)}px)`;
  return (
    <div className=" ml-[64px]  lg:w-[58vw] xl:w-[68vw] lg:pt-36 xl:pt-32 mb-10">
      <div className="flex justify-between py-6 ">
        <h1 className="font-bold text-lg">Explore Categories</h1>
        <div className="text-primary flex items-center gap-1 font-bold ">
          <FaMapMarkerAlt />
          <p>Ikosi Ketu, NGA </p>
          <IoIosArrowDown />
        </div>
      </div>

      {/* carousel viewport */}
      <div className="relative">
        <div ref={containerRef} className="relative overflow-hidden">
          {/* track */}
          <div
            className="flex gap-3 transition-transform duration-300 ease-in-out will-change-transform"
            style={{
              transform: trackTransform,
              width: trackWidth,
            }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                // each item has exact pixel width so translation is predictable
                style={{
                  flex: `0 0 ${itemWidth}px`,
                  boxSizing: "border-box",
                  backgroundColor: category.bg,
                }}
                className="flex flex-col items-center pb-2 px-3 rounded-md"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-36 object-contain"
                />
                <h1 className="text-[#253D4E] font-bold text-lg text-center">
                  {category.name}
                </h1>
                <p className="text-[#ADADAD] flex">
                  {category.noOfItems} <span className="ml-1">Items</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* prev / next buttons (disabled when can't move further) */}
        <button
          aria-label="previous"
          onClick={handlePrev}
          disabled={index <= 0}
          className={`text-white bg-[#01BE72] w-12 h-12 rounded-full flex items-center justify-center text-3xl absolute top-20 -left-6 z-40 ${
            index <= 0 ? "opacity-40 pointer-events-none" : ""
          }`}
        >
          <IoArrowBack />
        </button>

        <button
          aria-label="next"
          onClick={handleNext}
          disabled={index >= maxIndex}
          className={`text-white bg-[#01BE72] w-12 h-12 rounded-full flex items-center justify-center text-3xl absolute top-20 -right-6 z-40 ${
            index >= maxIndex ? "opacity-40 pointer-events-none" : ""
          }`}
        >
          <IoArrowForward />
        </button>
      </div>
    </div>
  );
};

export default VendorExplore;
