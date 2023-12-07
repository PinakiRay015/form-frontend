import React from "react";
import brandLogo from "../assets/logo.png";
import { FaFacebook , FaBehance , FaInstagram , FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-screen-2xl bg-[#006d77] fixed bottom-0 w-full">
      <div className="flex items-start justify-between max-w-[72rem] m-auto">
        <div className="">
          <div className="flex items-center">
            <img className="w-16" src={brandLogo} alt="" />
            <p className="text-3xl font-black text-white">CURATIONIST</p>
          </div>
          <div className="flex justify-around mt-2">
            <i className="text-white text-lg"><FaFacebook/></i>
            <i className="text-white text-lg"><FaBehance/></i>
            <i className="text-white text-lg"><FaInstagram/></i>
            <i className="text-white text-lg"><FaPinterest/></i>
          </div>
        </div>

        <div className="flex w-[20rem] justify-between">
          <ul>
            <p className="text-[#dee2e6] font-bold mb-3">About us</p>
            <li className="text-[#adb5bd] font-bold text-sm" >Contact CURATIONIST</li>
            <li className="text-[#adb5bd] font-bold text-sm" >Careers</li>
            <li className="text-[#adb5bd] font-bold text-sm" >Investor Relations</li>
            <li className="text-[#adb5bd] font-bold text-sm" >Pross Center</li>
          </ul>

          <ul>
            <p className="text-[#dee2e6] font-bold mb-3">Ways to buy</p>
            <li className="text-[#adb5bd] font-bold text-sm">Shop online</li>
            <li className="text-[#adb5bd] font-bold text-sm">store location</li>
            <li className="text-[#adb5bd] font-bold text-sm">Find a seller</li>
            <li className="text-[#adb5bd] font-bold text-sm">Enterprise store</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
