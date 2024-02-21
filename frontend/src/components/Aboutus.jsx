import React from "react";
import Grp from "../assets/grp.png";
import { FaCheck } from "react-icons/fa";
import Tick from "../assets/tick.png";

const Aboutus = () => {
  return (
    <div className="py-40 bg-blue-50">
      <div className="pt-40  md:grid md:grid-flow-col md:grid-cols-5 md:gap-10">
        <div className="h-[0vh] md:col-span-2 md:opacity-100 opacity-20 w-full">
          <img src={Grp} alt="" className="m-auto hidden sm:block" />
        </div>
        <div className="col-span-3 ">
          <div className="font-bold text-blue-500 text-5xl pb-5 text-center">ABOUT US</div>
          <div className="pr-10 font-semibold text-sm ml-5">
            <div className="pb-2">
              Join us for an immersive Developer Day at Rustamji Institute of
              Technology, Gwalior on 21st February! Dive deep into the world of
              Azure, explore the vast realms of Open-Source, and unlock the
              mysteries of Artificial Intelligence. This is an unparalleled
              opportunity to network with industry experts, share insights, and
              elevate your tech skills to new heights. Don't miss out on this
              groundbreaking event!
            </div>
            <div className="pt-4 py-1">
              - In our session, we'll delve into key Azure services, best
              practices, and real-world applications, giving you the insights
              you need to harness the full potential of cloud computing.
            </div>
            <div className="py-1">
              - Join us as we explore the principles of open-source, highlight
              its impact on the tech industry, and showcase how you can actively
              participate in this vibrant community. Whether you're a seasoned
              developer or new to the open-source world, there's something for
              everyone in this enlightening session.
            </div>
            <div className="py-1 pb-4">
              - Our session will demystify the core concepts of AI, discuss its
              real-world applications, and provide insights into the latest
              trends and developments. Join us to discover how AI is
              revolutionizing the world and learn how you can be a part of this
              exciting journey.
            </div>
          </div>
          <div className="font-bold text-2xl text-left pl-6">Benefits</div>
          <div className="text-sm font-semibold">
            <span className="pr-8 flex items-center">
              <img src={Tick} alt="" className="w-5 m-1" /> Networking- Social &
              Professional
            </span>
            <span className="flex items-center">
              <img src={Tick} alt="" className="w-5 m-1" /> Knowledge
              Enhancement
            </span>
          </div>
          <div className="text-sm flex items-center font-semibold">
            <img src={Tick} alt="" className="w-5 m-1" /> In-depth Knowledge
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
