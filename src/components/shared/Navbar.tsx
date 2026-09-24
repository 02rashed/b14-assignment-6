import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';
const Navbar = () => {
    return (
<div className="px-10 navbar bg-base-100 shadow-sm">
  <div className="navbar-start cursor-pointer">
    <Image className="h-4 w-4" src={logo} alt ="logo"  />
    <a className="px-2 text-xl">FITLOG</a>
  </div>
  <div className="navbar-center lg:flex">
    <ul className="grid grid-cols-2 gap-3">
        <li className="btn text-white hover:text-[#c5f900] bg-[#1a2312] rounded-[20px] ">Workouts</li>
        <li className="btn text-white hover:text-[#c5f900] bg-[#1a2312] rounded-[20px]"> Plan</li>
    </ul>
  </div>
  <div className="navbar-end">
    <ul className="flex gap-10">
        <li>Plan</li>
        <li>Saved</li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;