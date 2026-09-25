import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';
const Navbar = () => {
    return (
<div className="fixed z-100 lg:px-[15%] navbar bg-base-100 shadow-sm">
  <div className="navbar-start cursor-pointer">
    <Image className="h-4 w-4" src={logo} alt ="logo"  />
    <a className="px-2 text-xl"> FITLOG </a>
  </div>
  <div className="navbar-center lg:flex">
    <div className="grid grid-cols-2 gap-3">
        <a className="px-5 py-3 text-white hover:text-[#c5f900] bg-[#1a2312] rounded-[20px] hidden md:block">Workouts</a>
        <a className="px-10 py-3 text-white hover:text-[#c5f900] bg-[#1a2312] rounded-[20px] hidden md:block "> Plan</a>
      </div>
  </div>
  <div className="navbar-end">
    <ul className="flex gap-10">
        <li> Plan </li>
        <li> Saved </li>
    </ul>
  </div>
</div>
  );
};

export default Navbar;