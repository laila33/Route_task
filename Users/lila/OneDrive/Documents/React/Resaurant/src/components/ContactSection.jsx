import React, { useState } from "react";

function ContactSection() {
  const [dateTime, setDateTime] = useState("");

  const handleSetCurrentDateTime = () => {
    if (!dateTime) {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
      setDateTime(formattedDateTime);
    }
  };

  return (
    <div className="my-20 bg-[#0F172B] flex flex-col items-center justify-center p-8 md:p-16 mx-4 md:mx-20">
      <div className="flex items-center">
        <h5 className="font-pacifico font-medium text-[#FEA116] text-xl px-3">
          Reservation
        </h5>
        <div className="w-12 h-0.5 bg-[#FEA116]"></div>
      </div>

      <h2 className="font-nunito text-white font-bold text-3xl lg:text-5xl mt-3 mb-10 text-center leading-tight">
        Book A Table Online
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-white p-4 border-0 outline-none focus:ring-2 focus:ring-[#FEA116]"
        />
        
        <input
          type="email"
          placeholder="Your Email"
          className="w-full bg-white p-4 border-0 outline-none focus:ring-2 focus:ring-[#FEA116]"
        />
        
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          onClick={handleSetCurrentDateTime}
          className="w-full bg-white p-4 border-0 outline-none focus:ring-2 focus:ring-[#FEA116]"
        />

        <select className="w-full bg-white p-4 border-0 outline-none focus:ring-2 focus:ring-[#FEA116]">
          <option value="1">People 1</option>
          <option value="2">People 2</option>
          <option value="3">People 3</option>
        </select>

        <textarea
          placeholder="Special Request"
          rows="5"
          className="w-full col-span-1 md:col-span-2 bg-white p-4 border-0 outline-none focus:ring-2 focus:ring-[#FEA116] resize-none"
        ></textarea>
        
        <button className="w-full col-span-1 md:col-span-2 bg-[#FEA116] hover:bg-[#e69113] transition-all text-white font-bold py-4 uppercase shadow-lg">
          Book A Table
        </button>
      </div>
    </div>
  );
}

export default ContactSection;