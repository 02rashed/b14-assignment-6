import React from "react";
import Image from "next/image";
import bannerImg from "@/assets/banner.png";
const Banner = () => {
  return (
    <section className="container mx-auto">
      <div className="m-6 rounded-[10px] flex justify-around gap-10 py-10 bg-[#15171d]">
        <div className="w-[35%]">
          <p className="py-3 text-[#c2f800]">WORKOUT LIBRARY</p>
          <h1 className="py-3 font-bold text-4xl ">TRAIN WITH INTENT. LOG EVERY SET.</h1>
          <p className="py-3 text-gray-300">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>
          <button className="btn btn-success mt-4 bg-[#c2f800] border-none shadow-none">BROWSE WORKOUTS </button>
        </div>
        <div>
          <Image src={bannerImg} alt="banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
