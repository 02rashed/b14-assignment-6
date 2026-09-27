'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png';
import { ExerciseContext } from '@/context/exerciseContex';

const Navbar = () => {
  const { addPlan = [], saveLater = [] } = useContext(ExerciseContext);

  return (
    <div className="fixed z-[100] lg:px-[15%] navbar bg-base-100 shadow-sm">
      <div className="navbar-start cursor-pointer">
        <Image className="h-4 w-4" src={logo} alt="logo" />
        <Link href="/" className="px-2 text-xl font-bold">
          FITLOG
        </Link>
      </div>

      <div className="navbar-center lg:flex">
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/exercises"
            className="px-5 py-3 text-white hover:text-[#c5f900] bg-[#1a2312] rounded-[20px] hidden md:block"
          >
            Workouts
          </Link>
          
          <Link
            href="/my-plan"
            className="px-10 py-3 text-white hover:text-[#c5f900] bg-[#1a2312] rounded-[20px] hidden md:block"
          >
            Plan
          </Link>
        </div>
      </div>

      <div className="navbar-end">
        <ul className="flex gap-10 items-center">
          <li>
            <Link href="/my-plan" className="flex items-center gap-1.5">
              <span>Plan</span>
              <span className="bg-[#c2f800] text-black px-2 py-0.5 rounded-full text-xs font-bold">
                {addPlan.length}
              </span>
            </Link>
          </li>
          <li>
            <Link href="/my-plan" className="flex items-center gap-1.5">
              <span>Saved</span>
              <span className="bg-[#c2f800] text-black px-2 py-0.5 rounded-full text-xs font-bold">
                {saveLater.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;