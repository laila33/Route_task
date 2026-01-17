import React, { useEffect } from "react";
import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.jpg";
import about3 from "../assets/about-3.jpg";
import about4 from "../assets/about-4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
function WelcomeSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="container mx-auto py-16 px-6">
      <div className="grid grid-cols-12 gap-10 items-center">
        <div className="col-span-12 lg:col-span-6">
          <div className="grid grid-cols-2 gap-3">
            <div className="text-right">
              <img
                src={about1}
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="w-full h-auto rounded shadow-sm"
              />
            </div>
            <div className="text-left">
              <img
                src={about2}
                className="w-[75%] h-auto rounded shadow-sm mt-[25%]"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
            </div>
            <div className="text-right">
              <img
                src={about3}
                className="w-[75%] h-auto rounded shadow-sm ml-auto"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
            </div>
            <div className="text-left">
              <img
                src={about4}
                className="w-full h-auto rounded shadow-sm"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 flex flex-col gap-5">
          <div>
            <div className="flex items-center gap-2">
              <h5 className="font-pacifico font-medium text-[#FEA116] text-xl">
                About Us
              </h5>
              <div className="w-12 h-[2px] bg-[#FEA116]"></div>
            </div>
            <h2 className="font-nunito text-[#0F172B] font-bold text-4xl lg:text-5xl mt-3 leading-tight">
              Welcome to <i className="fa fa-utensils text-[#FEA116] mx-2"></i>{" "}
              Restoran
            </h2>
          </div>

          <p className="text-gray-600 font-nunito leading-relaxed">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
            sit.
          </p>
          <p className="text-gray-600 font-nunito leading-relaxed">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet.
          </p>

          <div className="flex gap-10 mt-5" ref={ref}>
            {" "}
            <div className="border-l-4 border-[#FEA116] px-4 flex gap-5">
              <h3 className="text-[#FEA116] text-5xl font-bold">
                {inView ? <CountUp end={15} duration={3} /> : "0"}
              </h3>
              <p className="uppercase text-gray-500">
                Years of <br />{" "}
                <span className="font-bold text-[#0F172B]">Experience</span>
              </p>
            </div>
            <div className="border-l-4 border-[#FEA116] px-4 flex">
              <h3 className="text-[#FEA116] text-5xl font-bold">
                {inView ? <CountUp end={50} duration={3} /> : "0"}
              </h3>
              <p className="uppercase text-gray-500 ms-4">
                Popular <br />{" "}
                <span className="font-bold text-[#0F172B]">Master Chefs</span>
              </p>
            </div>
          </div>

          <button className="btn bg-[#FEA116] text-white border-0 rounded-none w-fit px-10 py-3 mt-5 hover:bg-[#e69113]">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
export default WelcomeSection;
