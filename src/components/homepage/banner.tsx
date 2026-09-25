import React from "react";
import Image from "next/image";
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-[10%]">
      <div className="m-4 sm:m-6 rounded-[10px] bg-[#15171d] p-6 
      lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
        <div className="w-full lg:w-[45%] text-center lg:text-left flex flex-col items-center lg:items-start">
          <p className="py-2 text-[#c2f800] text-sm font-semibold tracking-wider">
            WORKOUT LIBRARY
          </p>
          <h1 className="py-2 font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="py-3 text-gray-300 text-base sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <button className="btn btn-success mt-4 bg-[#c2f800] text-black
           hover:bg-[#a6d400] font-bold border-none shadow-none px-6 py-3 rounded-md">
            BROWSE WORKOUTS
          </button>
        </div>
        <div className="w-full lg:w-[50%] flex justify-center">
          <Image src={bannerImg} alt="banner" className="w-full 
          max-w-[500px] lg:max-w-none h-auto object-contain rounded-lg" />
        </div>

      </div>
    </section>
  );
};

export default Banner;
