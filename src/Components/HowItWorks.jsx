import React from "react";
import { GiArchiveResearch } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuMessagesSquare } from "react-icons/lu";

const HowItWorks = () => {
  return (
    <div className="px-6 md:px-14 lg:px-28 py-10 my-10">
      <h2 className="font-bold text-center text-5xl text-[#1A73E8] mt-10">
        How it works
      </h2>
      <p className="font-semibold text-2xl text-center text-[#6C757D] mt-2.5 mb-10">
        Your path to learn, share & grow
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-xl flex flex-col items-center p-10">
          <GiArchiveResearch className="text-[#1A73E8] text-9xl border-3 border-[#1A73E8] bg-[#D0E6F0] p-3.5 rounded-full" />
          <h3 className="text-[#2F435C] text-3xl font-bold my-5">1.Discover</h3>
          <p className="text-[#4A4A4A] text-xl text-center">
            Browse listings for skills offered by local users – from guitar to
            coding.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl flex flex-col items-center p-10">
          <LuMessagesSquare className="text-[#1A73E8] text-9xl border-3 border-[#1A73E8] bg-[#D0E6F0] p-3.5 rounded-full" />
          <h3 className="text-[#2F435C] text-3xl font-bold my-5">2.Connect</h3>
          <p className="text-[#4A4A4A] text-xl text-center">
            Message providers, discuss details & schedule your skill exchange.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl flex flex-col items-center p-10">
          <HiOutlineLightBulb className="text-[#1A73E8] text-9xl border-3 border-[#1A73E8] bg-[#D0E6F0] p-3.5 rounded-full" />
          <h3 className="text-[#2F435C] text-3xl font-bold my-5">
            3.Learn & Grow
          </h3>
          <p className="text-[#4A4A4A] text-xl text-center">
            Experience new skills, rate providers & share your own expertise!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
