import React from "react";
import { NavLink } from "react-router-dom";
import havesta from "/images/harvestaLogo.png";
import { FaGreaterThan, FaTiktok, FaXTwitter } from "react-icons/fa6";
import {
  FaPhoneAlt,
  FaRegPaperPlane,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { CgFacebook } from "react-icons/cg";
import Payment from "../assets/Payment.svg";

const Footer = () => {
  const links = [
    {
      id: 0,
      name: "Home",
      link: "/",
    },
    {
      id: 1,
      name: "About",
      link: "",
    },
    {
      id: 2,
      name: "News",
      link: "",
    },

    {
      id: 3,
      name: "Contact",
      link: "",
    },
    {
      id: 4,
      name: "Riders",
      link: "",
    },
    {
      id: 5,
      name: "Vendors",
      link: "",
    },
    {
      id: 6,
      name: "Careers",
      link: "",
    },
    {
      id: 7,
      name: "Marketplace",
      link: "",
    },
    {
      id: 8,
      name: "Terms of use",
      link: "",
    },
    {
      id: 9,
      name: "Privacy Policy",
      link: "",
    },
  ];
  const informations = [
    {
      id: 0,
      icon: <FaRegPaperPlane />,
      content: "17 Kaffi Street, Behind ICM, Alausa, Ikeja, Lagos State.",
    },
    {
      id: 1,
      icon: <FaPhoneAlt />,
      content: "080HAVESTA",
    },
    {
      id: 2,
      icon: <TbMail />,
      content: "hello@havesta.com",
    },
  ];

  const icons = [
    {
      id: 0,
      icon: <CgFacebook />,
    },
    {
      id: 1,
      icon: <FaXTwitter />,
    },
    {
      id: 2,
      icon: <FaLinkedinIn />,
    },
    {
      id: 3,
      icon: <FaInstagram />,
    },
    {
      id: 4,
      icon: <FaTiktok />,
    },
  ];
  return (
    // correct logo and links and socials image
    <div className="bg-black text-white">
      {/* upper part */}
      <div className="flex justify-between gap-5 py-14 px-12 w-full max-w-[90rem] m-auto">
        <div className="flex flex-col ">
          <div className="flex  items-center gap-2  h-8 w-fit mb-4">
            <img src={havesta} alt="" />
          </div>
          <p className="font-light text-sm max-w-xs xl:text-base">
            HARVESTA prioritizes convenience and transparency, enhancing the
            overall shopping experience. Our product also offers real-time order
            tracking, secure payment options, and eco-friendly delivery choices,
            aligning with the values of today's environmentally conscious
            consumers.
          </p>
        </div>

        {/* Featured Links */}
        <div className="">
          <h1 className="font-[500] text-lg h-8 mb-4 w-36 xl:text-xl">
            Featured Links
          </h1>
          {/* Links */}
          <div className=" grid grid-cols-2 gap-2 gap-y-3 font-light text-sm xl:text-base ">
            {links.map((link) => (
              <div key={link.id} className="flex items-center gap-2">
                <FaGreaterThan className="w-2 text-harvestaLightGreen" />
                <NavLink
                  to={link.link}
                  className={`cursor-pointer transition transform duration-300   hover:text-harvestaLightGreen hover:scale-105`}
                >
                  {link.name}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-[500] text-lg h-8 mb-4 xl:text-xl">
            Information HQ
          </h1>
          <div className="font-extralight flex gap-3 flex-col ">
            {informations.map((info) => (
              <div key={info.id} className="flex  gap-3 text-sm xl:text-base">
                <span className="text-harvestaLightGreen mt-1 text-sm ">
                  {info.icon}
                </span>
                <p className=" max-w-[15rem]">{info.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className=" ">
          <h1 className="font-[500] text-lg h-8 mb-4 xl:text-xl">Subscribe</h1>
          <div className="grid grid-cols-[auto_60px] mb-4 text-sm xl:text-base xl:grid-cols-[auto_70px] ">
            <input
              type="email"
              placeholder="Enter email address "
              className="py-3 px-2 pl-4 w-48 text-[#444444] placeholder:text-[#444444] focus:ring-0 rounded-l-xl xl:w-60"
            />
            <div className=" bg-harvestaLightGreen  flex items-center justify-center rounded-r-md text-xl ">
              <FaRegPaperPlane className="" />
            </div>
          </div>
          {/* icons */}
          <div className="flex gap-4 mb-6">
            {icons.map((icon) => (
              <div
                key={icon.id}
                className="border border-white border-opacity-20 px-3 py-3 text-harvestaYellow cursor-pointer"
              >
                {icon.icon}
              </div>
            ))}
          </div>
          {/* payment */}
          <img src={Payment} alt="" className=" w-[75%]" />
        </div>
      </div>
      {/* lower part */}
      <div className="flex items-center justify-center py-6 bg-[#00150D] ">
        <p className="text-[#909DA4] text-sm ">
          © Copyright 2025.{"  "}
          <span className="text-white ml-3">All Rights Reserved</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
