import React from "react";

const services = [
  {
    id: 1,
    icon: "fa-user-tie",
    title: "Master Chefs",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    id: 2,
    icon: "fa-utensils",
    title: "Quality Food",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    id: 3,
    icon: "fa-cart-plus",
    title: "Online Order",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    id: 4,
    icon: "fa-headset",
    title: "24/7 Service",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
];

function FirstfourCards() {
  return (
    <div className="container mx-auto py-20 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg p-8 transition-all duration-500 hover:bg-[#FEA116] group cursor-pointer"
          >
            <i
              className={`fa ${service.icon} fa-3x text-[#FEA116] group-hover:text-white mb-4`}
            ></i>

            <h5 className="text-xl font-bold font-heebo mb-3 group-hover:text-white">
              {service.title}
            </h5>

            <p className="text-gray-600 group-hover:text-white font-nunito">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FirstfourCards;