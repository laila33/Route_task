import React from "react";
import img1 from "../assets/testimonial-3.jpg";
function Clients() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex items-center">
        <div className="w-12 h-0.5 bg-[#FEA116]"></div>
        <h5 className="font-pacifico font-medium text-[#FEA116] text-xl px-3">
          Testimonial
        </h5>
        <div className="w-12 h-0.5 bg-[#FEA116]"></div>
      </div>

      <h2 className="font-nunito text-[#0F172B] font-bold text-2xl lg:text-5xl mt-3 mb-10 leading-tight">
        Our Clients Say!!!
      </h2>

      <div className="container mx-auto py-16 px-4 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card bg-base-100 shadow-sm">
            <figure className=" flex justify-start px-5">
              <i className="fa fa-quote-left fa-2x text-[#FEA116]"></i>
            </figure>
            <div className="card-body">
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="flex gap-4">
                <img
                  src={img1}
                  className="rounded-full h-15 w-15 "
                />
                <div className="flex flex-col gap-3">
                  <h2 className="card-title">Client Name</h2>
                  <p>Profession</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm">
            <figure className=" flex justify-start px-5">
              <i className="fa fa-quote-left fa-2x text-[#FEA116]"></i>
            </figure>
            <div className="card-body">
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="flex gap-4">
                <img
                  src={img1}
                  className="rounded-full h-15 w-15 "
                />
                <div className="flex flex-col gap-3">
                  <h2 className="card-title">Client Name</h2>
                  <p>Profession</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm">
            <figure className=" flex justify-start px-5">
              <i className="fa fa-quote-left fa-2x text-[#FEA116]"></i>
            </figure>
            <div className="card-body">
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="flex gap-4">
                <img
                  src={img1}
                  className="rounded-full h-15 w-15 "
                />
                <div className="flex flex-col gap-3">
                  <h2 className="card-title">Client Name</h2>
                  <p>Profession</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm">
            <figure className=" flex justify-start px-5">
              <i className="fa fa-quote-left fa-2x text-[#FEA116]"></i>
            </figure>
            <div className="card-body">
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="flex gap-4">
                <img
                  src={img1}
                  className="rounded-full h-15 w-15 "
                />
                <div className="flex flex-col gap-3">
                  <h2 className="card-title">Client Name</h2>
                  <p>Profession</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
