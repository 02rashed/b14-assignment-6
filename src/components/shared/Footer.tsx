import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <div className="navbar-start cursor-pointer">
        <Image className="h-4 w-4" src={logo} alt="logo" />
        <a className="px-2 text-xl"> FITLOG </a>
      </div>
    </div>
  );
};

export default Footer;
