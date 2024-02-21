import React from "react";
import heroimg from "../assets/hero.jpg";
import { SlCalender } from "react-icons/sl";
import { IoLocationSharp } from "react-icons/io5";
import Sponsors from "../assets/sponsors.png";
import { LuClock11 } from "react-icons/lu";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdOutlineDateRange } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative pb-80 lg:pb-40 ">
      <div className="lg:flex ">
        <div className="lg:w-1/2 w-full p-4 px-8 md:px-16 lg:px-20">
          <div className="text-blue-700 font-bold text-2xl lg:text-3xl">
            C2C<div>DEVCONVO</div>
          </div>
          <div className=" text-5xl text-blue-700 font-bold pt-10 lg:pt-24">
            AZURE DEVELOPER <div>DAY - GWALIOR</div>
          </div>
          <div className="flex items-center gap-2 pt-6">
            <div>
              <SlCalender className="text-blue-500" />
            </div>
            <div>21 February2023</div>
          </div>
          <div className="flex lg:items-center gap-2 pb-2">
            <div>
              <IoLocationSharp className="text-blue-500 mt-1 lg:mt-0" />
            </div>
            <div>Rustamji Institute Of Technology, Gwalior</div>
          </div>
          <div className="py-10 text-center lg:text-left">
            <button className="text-white bg-gradient-to-br from-blue-800 via-blue-700 to-green-200 py-4 px-8 font-semibold rounded">
              Register Now
            </button>
          </div>
          <div className="flex justify-center lg:block">
            <img src={Sponsors} alt="" className="lg:h-10 pb-6 lg:pb-0" />
          </div>
        </div>

        <div className="lg:w-1/2 overflow-hidden lg:rounded-bl-3xl ">
          <img src={heroimg} alt="" className="w-full    " />
        </div>
      </div>

      

      <div className="lg:flex border w-[75vw]  absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 py-10 px-10 bg-white  border-gradient">

        <div className="flex flex-col justify-center items-center p-4 px-10 border-b-2 lg:border-b-0 lg:border-r-2 lg:w-1/4">
          <div>
            <LuClock11 className="text-blue-600 text-2xl" />
          </div>
          <div className="text-lg font-semibold">Timing</div>
          <div className="text-sm w-max">11:00 AM - 12:30</div>
          <div className="text-sm">PM IST</div>
        </div>
        
        <div className="flex flex-col justify-center items-center p-4 px-10 border-b-2 lg:border-b-0 lg:border-r-2 lg:w-1/4">
          <div>
            <FaUserTie className="text-blue-600 text-2xl" />
          </div>
          <div className="text-lg font-semibold">Speaker</div>
          <div className="text-sm text-center lg:text-left">2 Professional</div>
          <div className="text-sm">Speakers</div>
        </div>
        <div className="flex flex-col justify-center items-center p-4 px-10 border-b-2 lg:border-b-0 lg:border-r-2 lg:w-1/4">
          <div>
            <HiOutlinePencilSquare className="text-blue-600 text-2xl" />
          </div>
          <div className="text-lg font-semibold">Registration Fee</div>
          <div className="text-sm ">Free</div>
          <div className="text-sm text-white">.</div>
        </div>
        <div className="flex flex-col justify-center items-center border-b-2 lg:border-b-0 p-4 px-10  lg:w-1/4">
          <div>
            <MdOutlineDateRange className="text-blue-600 text-2xl" />
          </div>
          <div className="text-lg font-semibold">Days</div>
          <div className="text-sm ">1 Day</div>
          <div className="text-sm text-white">-</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
