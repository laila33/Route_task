import React from "react";
import hero from "../assets/bg-hero.jpg";
import hero2 from "../assets/hero.png";   

function Hero() {
  return (
    <div className="relative w-full min-h-screen md:h-[90vh] lg:h-screen overflow-hidden bg-[#0F172B]">
      
      <div className="absolute inset-0">
        <img 
          src={hero} 
          className="w-full h-full object-cover opacity-30" 
          alt="Hero Background" 
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center px-6 lg:px-20 py-24 md:py-0 gap-10 lg:gap-20">
        
        <div className="text-center md:text-left flex flex-col items-center md:items-start flex-1">
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-7xl font-raleway leading-tight mb-6 animate-fade-in-up">
            Enjoy Our <br /> Delicious Meal
          </h1>
          
          <p className="text-white text-sm md:text-base lg:text-lg font-nunito mb-8 max-w-[500px] opacity-90 leading-relaxed">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
          </p>
          
          <button className="btn btn-lg bg-[#FEA116] hover:bg-[#e69113] border-0 text-white font-heebo rounded-none px-10 transition-all duration-300 transform hover:scale-105">
            BOOK A TABLE
          </button>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img 
            src={hero2} 
            className="w-[280px] md:w-[400px] lg:w-[550px] animate-[spin_20s_linear_infinite] drop-shadow-2xl" 
            alt="Delicious Food"
          />
        </div>

      </div>
    </div>
  );
}

export default Hero;