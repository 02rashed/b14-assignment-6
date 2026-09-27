import React from 'react';
import Image from 'next/image'
import logo from '@/assets/logo.png'

const Footer = () => {
  return (
  <footer className="bg-[#12141a] text-gray-400 py-10 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image src={logo} className="w-5 h-5 text-lime-400" alt="logo"/>
          <span className="font-extrabold text-white text-lg uppercase">
            FITLOG
          </span>
        </div>
        <p className="text-sm text-gray-400 font-normal">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>);
};

export default Footer;
