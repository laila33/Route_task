import React from "react";
import t1 from "../assets/team-1.jpg";
import t2 from "../assets/team-2.jpg";
import t3 from "../assets/team-3.jpg";
import t4 from "../assets/team-4.jpg";
const teamMembers = [
  { id: 1, name: "Full Name", designation: "Designation", img: t1 },
  { id: 2, name: "Full Name", designation: "Designation", img: t2 },
  { id: 3, name: "Full Name", designation: "Designation", img: t3 },
  { id: 4, name: "Full Name", designation: "Designation", img: t4 },
];

function TeamSection() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="card bg-white shadow-lg flex flex-col items-center p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
          >
         
            <div className="overflow-hidden w-48 h-48 rounded-full mb-5">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="text-center">
              <h2 className="font-nunito text-[#0F172B] font-bold text-2xl mb-1">
                {member.name}
              </h2>
              <p className="text-gray-500 text-sm italic">
                {member.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
