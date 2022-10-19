import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heropData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="px-4 py-1 flex items-center justify-center gap-2 bg-orange-100 p-2 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 drop-shadow-xl bg-white rounded-full overflow-hidden">
            <img
              src={Delivery}
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4rem] font-bold tracking-wide">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[4.5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:w-[80%] md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <button className="bg-gradient-to-tr from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-md hover:shadow-md transition-all ease-in-out duration-100">
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          alt="hero-bg"
          className="ml-auto w-full lg:w-auto h-420 lg:h-650"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap">
          {heropData?.map((data) => (
            <div
              key={data.id}
              className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-2xl"
            >
              <img
                src={data.imgeSrc}
                alt="i1"
                className="w-20 lg:w-40 -mt-10 lg:-mt-20"
              />
              <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                {data.name}
              </p>
              <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold py-1 lg:py-3">
                {data.desc}
              </p>
              <p className="text-sm font-semibold text-headingColor">
                $<span className="text-xs text-red-600"> {data.price}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
