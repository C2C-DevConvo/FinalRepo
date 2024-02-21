import React, { useState } from "react";
import heroimg from "../assets/hero.jpg";
import { SlCalender } from "react-icons/sl";
import { IoLocationSharp } from "react-icons/io5";
import Sponsors from "../assets/sponsors.png";
import { LuClock11 } from "react-icons/lu";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdOutlineDateRange } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    city: "",
    organization: "",
    designation: "",
    linkedin: "",
    twitter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setShowThankYou(true);
        setShowForm(false);
        setFormData({
          name: "",
          number: "",
          email: "",
          city: "",
          organization: "",
          designation: "",
          linkedin: "",
          twitter: "",
        });
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="relative pb-80 lg:pb-40">
      <div className="lg:flex">
        <div className="lg:w-1/2 w-full p-4 px-8 md:px-16 lg:px-20 mt-5">
          <div className="text-blue-700 font-bold text-2xl lg:text-3xl">
            C2C
            <div>DEVCONVO</div>
          </div>
          <div className=" text-5xl text-blue-700 font-bold pt-10 lg:pt-24">
            AZURE DEVELOPER <div>DAY - GWALIOR</div>
          </div>
          <div className="flex items-center gap-2 pt-6">
            <div>
              <SlCalender className="text-blue-500" />
            </div>
            <div>21 February 2023</div>
          </div>
          <div className="flex lg:items-center gap-2 pb-2">
            <div>
              <IoLocationSharp className="text-blue-500 mt-1 lg:mt-0" />
            </div>
            <div>Rustamji Institute Of Technology, Gwalior</div>
          </div>
          <div className="py-10 text-center lg:text-left">
            <button
              className="text-white bg-gradient-to-br from-blue-800 via-blue-700 to-green-200 py-4 px-8 font-semibold rounded"
              onClick={() => setShowForm(true)}
            >
              Register Now
            </button>
          </div>
          <div className="flex justify-center lg:block">
            <img src={Sponsors} alt="" className="lg:h-10 pb-6 lg:pb-0" />
          </div>
        </div>

        <div className="lg:w-1/2 overflow-hidden lg:rounded-bl-3xl">
          <img src={heroimg} alt="" className="w-full md:h-[100vh]" />
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none ">
          <div className="relative w-full max-w-3xl mx-auto my-6">
            <div className="relative flex  w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              <div className="relative p-6 flex-auto bg-white rounded-lg shadow-md">
                <button
                  className="absolute top-0 right-0 mr-4 mt-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                  onClick={() => setShowForm(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="text-blue-700 py-2 font-bold text-2xl lg:text-3xl">
                  C2C
                  <div>DEVCONVO</div>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                >
                  <div className="flex flex-col">
                    <label className="text-lg text-gray-800 mb-1">Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field py-2 rounded border-2 border-blue-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg text-gray-800 mb-1">
                      Number:
                    </label>
                    <input
                      type="text"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      required
                      className="input-field py-2 rounded border-2 border-blue-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg text-gray-800 mb-1">Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field py-2 rounded border-2 border-blue-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg text-gray-800 mb-1">City:</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="input-field py-2 rounded border-2 border-blue-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg text-gray-800 mb-1">
                      Organization/Institute:
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      className="input-field py-2 rounded border-2 border-blue-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg text-gray-800 mb-1">
                      Designation:
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      required
                      className="input-field py-2 rounded border-2 border-blue-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg text-gray-800 mb-1">
                      LinkedIn:
                    </label>
                    <input
                      type="text"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="input-field py-2 rounded border-2 border-blue-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg text-gray-800 mb-1">
                      Twitter:
                    </label>
                    <input
                      type="text"
                      name="twitter"
                      value={formData.twitter}
                      onChange={handleChange}
                      className="input-field py-2 rounded border-2 border-blue-500"
                    />
                  </div>
                  <div className="flex justify-end col-span-2">
                    <button
                      type="submit"
                      className="bg-gradient-to-br from-blue-800 via-blue-700 to-green-200 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="relative flex  w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              <div className="relative p-6 flex-auto">
                <p className="text-center text-xl font-semibold">
                  Thank you, you have been registered!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

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
