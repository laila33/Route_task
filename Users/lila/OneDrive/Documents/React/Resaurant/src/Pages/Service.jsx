import React from "react";
import Hero from "../components/Hero";
import FirstfourCards from "../components/FirstfourCards";

function Service() {
  return (
    <>
      <Hero />
      <div className="flex flex-col items-center justify-center py-10">
        <div className="flex items-center">
          <div className="w-12 h-0.5 bg-[#FEA116]"></div>
          <h5 className="font-pacifico font-medium text-[#FEA116] text-xl px-3">
           Our Services
          </h5>
          <div className="w-12 h-0.5 bg-[#FEA116]"></div>
        </div>

        <h2 className="font-nunito text-[#0F172B] font-bold text-2xl lg:text-5xl mt-3 mb-10 leading-tight">
          Explore Our Services
        </h2>
      </div>
      <FirstfourCards />
       <FirstfourCards />
    </>
  );
}

export default Service;
