import React from "react";
import brandLogo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="max-w-screen-2xl shadow drop-shadow-2xl">
      <div className="flex items-center justify-between gap-4 max-w-screen-xl m-auto ">
        <div className="flex items-center gap-3 text-slate-800">
        <div className="flex items-center">
          <img className="h-12" src={brandLogo} alt="" />
          <h1 className="font-bold text-xl">CURATIONIST</h1>
        </div>
        <nav className="flex gap-4 font-medium text-sm">
            <li className="list-none">Works</li>
            <li className="list-none">Curated Collections</li>
            <li className="list-none">Editorial Features</li>
        </nav>
        </div>

        <div className="flex items-center gap-3">
            <input className="w-36 h-8 rounded-md shadow-xl outline-none px-1 text-sm font-medium" type="text" placeholder="Search by.."/>
            <button className="bg-white h-8 font-medium text-sm px-3 rounded-md border shadow-xl" type="button">Log in</button>
            <button className="bg-black text-white px-3 h-8 rounded-md shadow-xl" type="button">Create account</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
