import React, { useState } from "react"; 

const menuCategories = [
  { id: "breakfast", icon: "fa-coffee", subtitle: "Popular", title: "Breakfast" },
  { id: "launch", icon: "fa-hamburger", subtitle: "Special", title: "Launch" },
  { id: "dinner", icon: "fa-utensils", subtitle: "Lovely", title: "Dinner" },
];

function Foodmenu() {
  const [activeTab, setActiveTab] = useState("breakfast");

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex items-center">
        <div className="w-12 h-0.5 bg-[#FEA116]"></div>
        <h5 className="font-pacifico font-medium text-[#FEA116] text-xl px-3">
          Food menu
        </h5>
        <div className="w-12 h-0.5 bg-[#FEA116]"></div>
      </div>
      
      <h2 className="font-nunito text-[#0F172B] font-bold text-2xl lg:text-5xl mt-3 mb-10 leading-tight">
        Most Popular Items
      </h2>

      <div className="flex justify-center border-b border-gray-200">
        <div className="flex gap-8 lg:gap-16">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-3 pb-4 transition-all duration-300 border-b-2 ${
                activeTab === cat.id 
                ? "border-[#FEA116]" 
                : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <i className={`fa ${cat.icon} text-3xl text-[#FEA116]`}></i>
              
              <div className="text-left">
                <p className="text-xs text-gray-500 leading-tight">{cat.subtitle}</p>
                <h6 className="font-bold text-[#0F172B] uppercase text-sm md:text-base">
                  {cat.title}
                </h6>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Foodmenu;