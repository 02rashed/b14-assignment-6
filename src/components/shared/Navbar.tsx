import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import Link from "next/link";
const Navbar = () => {
    return (
<div className="fixed z-100 lg:px-[15%] navbar bg-base-100 shadow-sm">
  <div className="navbar-start cursor-pointer">
    <Image className="h-4 w-4" src={logo} alt ="logo"  />
    <Link href="../homepage/banner.tsx" className="px-2 text-xl"> FITLOG </Link>
  </div>
  <div className="navbar-center lg:flex">
    <div className="grid grid-cols-2 gap-3">
        <Link href="" className="px-5 py-3 text-white hover:text-[#c5f900] bg-[#1a2312] rounded-[20px] hidden md:block">Workouts</Link>
        <Link href="" className="px-10 py-3 text-white hover:text-[#c5f900] bg-[#1a2312] rounded-[20px] hidden md:block "> Plan</Link>
      </div>
  </div>
  <div className="navbar-end">
    <ul className="flex gap-10">
        <li><Link href="/my-plan"> Plan </Link></li>
        <li><Link href=""> Saved </Link> </li>
    </ul>
  </div>
</div>
  );
};

export default Navbar;