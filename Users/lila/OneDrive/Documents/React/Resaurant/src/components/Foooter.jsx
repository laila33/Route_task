import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0F172B] text-white pt-16 pb-8 px-4 md:px-20 font-nunito">
      {/* الجزء العلوي: 4 أعمدة */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-12">
        {/* العمود الأول: Company */}
        <div>
          <div className="flex items-center mb-6">
            <h4 className="font-pacifico text-[#FEA116] text-2xl">Company</h4>
            <div className="w-10 h-0.5 bg-[#FEA116] ml-2"></div>
          </div>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="hover:tracking-widest transition-all duration-300"
              >
                {" "}
                <i className="fas fa-chevron-right mr-2 text-xs"></i> About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:tracking-widest transition-all duration-300"
              >
                {" "}
                <i className="fas fa-chevron-right mr-2 text-xs"></i> Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:tracking-widest transition-all duration-300"
              >
                {" "}
                <i className="fas fa-chevron-right mr-2 text-xs"></i>{" "}
                Reservation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:tracking-widest transition-all duration-300"
              >
                {" "}
                <i className="fas fa-chevron-right mr-2 text-xs"></i> Privacy
                Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:tracking-widest transition-all duration-300"
              >
                {" "}
                <i className="fas fa-chevron-right mr-2 text-xs"></i> Terms &
                Condition
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center mb-6">
            <h4 className="font-pacifico text-[#FEA116] text-2xl">Contact</h4>
            <div className="w-10 h-0.5 bg-[#FEA116] ml-2"></div>
          </div>
          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <i className="fas fa-map-marker-alt text-[#FEA116]"></i> 123
              Street, New York, USA
            </p>
            <p className="flex items-center gap-3">
              <i className="fas fa-phone-alt text-[#FEA116]"></i> +012 345 67890
            </p>
            <p className="flex items-center gap-3">
              <i className="fas fa-envelope text-[#FEA116]"></i>{" "}
              info@example.com
            </p>
            <div className="flex gap-2 mt-4">
              <a
                href="#"
                className="w-9 h-9 border rounded-full flex items-center justify-center hover:bg-white hover:text-[#0F172B] transition-all"
              >
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-9 h-9 border rounded-full flex items-center justify-center hover:bg-white hover:text-[#0F172B] transition-all"
              >
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-9 h-9 border rounded-full flex items-center justify-center hover:bg-white hover:text-[#0F172B] transition-all"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a
                href="#"
                className="w-9 h-9 border rounded-full flex items-center justify-center hover:bg-white hover:text-[#0F172B] transition-all"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* العمود الثالث: Opening */}
        <div>
          <div className="flex items-center mb-6">
            <h4 className="font-pacifico text-[#FEA116] text-2xl">Opening</h4>
            <div className="w-10 h-0.5 bg-[#FEA116] ml-2"></div>
          </div>
          <div className="space-y-4">
            <div>
              <h5 className="font-bold text-lg">Monday - Saturday</h5>
              <p>09AM - 09PM</p>
            </div>
            <div>
              <h5 className="font-bold text-lg">Sunday</h5>
              <p>10AM - 08PM</p>
            </div>
          </div>
        </div>

        {/* العمود الرابع: Newsletter */}
        <div>
          <div className="flex items-center mb-6">
            <h4 className="font-pacifico text-[#FEA116] text-2xl">
              Newsletter
            </h4>
            <div className="w-10 h-0.5 bg-[#FEA116] ml-2"></div>
          </div>
          <p className="mb-6">
            Dolor amet sit justo amet elitr clita ipsum elitr est.
          </p>
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Your email"
              className="w-full py-4 pl-4 pr-24 border-0 outline-none text-[#0F172B] bg-white"
            />
            <button className="absolute right-2 top-2 bottom-2 px-4 bg-[#FEA116] text-white font-bold uppercase text-xs">
              Signup
            </button>
          </div>
        </div>
      </div>

      {/* الجزء السفلي: Copyright */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 text-center md:text-left">
        <p>
          ©{" "}
          <a href="#" className="border-b border-gray-500">
            Your Site Name
          </a>
          , All Right Reserved. Designed By{" "}
          <a href="#" className="border-b border-gray-500">
            HTML Codex
          </a>
          <br /> Distributed By{" "}
          <a href="#" className="border-b border-gray-500">
            ThemeWagon
          </a>
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#FEA116]">
            Home
          </a>
          <div className="w-[1px] h-4 bg-gray-500"></div>
          <a href="#" className="hover:text-[#FEA116]">
            Cookies
          </a>
          <div className="w-[1px] h-4 bg-gray-500"></div>
          <a href="#" className="hover:text-[#FEA116]">
            Help
          </a>
          <div className="w-[1px] h-4 bg-gray-500"></div>
          <a href="#" className="hover:text-[#FEA116]">
            FAQs
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
