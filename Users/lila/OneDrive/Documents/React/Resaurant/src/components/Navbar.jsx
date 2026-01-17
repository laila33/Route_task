import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeLink, setActiveLink] = useState("HOME");

  const navLinks = (
    <>
      {["HOME", "ABOUT", "SERVICES", "MENU", "CONTACT"].map((link) => (
        <li key={link}>
          <Link
            to={link === "HOME" ? "/" : `/${link.toLowerCase()}`}
            onClick={() => setActiveLink(link)}
            className={`cursor-pointer transition-colors duration-300 ${
              activeLink === link
                ? "text-[#FEA116]" 
                : "text-white" 
            }`}
          >
            {link}
          </Link>
        </li>
      ))}

      <li
        className={`${
          activeLink === "PAGES" ? "text-[#FEA116]" : "text-white"
        }`}
      >
        <details>
          <summary
            onClick={() => setActiveLink("PAGES")}
            className="cursor-pointer"
          >
            PAGES
          </summary>
          <ul className="bg-white lg:bg-[#0F172B] p-2 text-black lg:text-white w-40">
            <li>
              <Link to="/booking" onClick={() => setActiveLink("PAGES")}>Booking</Link>
            </li>
            <li>
              <Link to="/team" onClick={() => setActiveLink("PAGES")}>Our Team</Link>
            </li>
            <li>
              <Link to="/testimonial" onClick={() => setActiveLink("PAGES")}>Testimonial</Link>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <div
      className={`navbar fixed top-0 w-full z-50 transition-all duration-300 px-4 lg:px-20 ${
        isScrolled
          ? "bg-[#0F172B] shadow-lg py-2"
          : "bg-transparent py-4 text-white"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden text-[#FEA116]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box w-52 font-bold"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center ml-2 lg:ml-0">
          <i className="fa fa-utensils text-3xl lg:text-4xl text-[#FEA116] me-3"></i>
          <span className="text-2xl lg:text-3xl font-bold text-[#FEA116]">
            Restoran
          </span>
        </div>
      </div>

      <div className="navbar-end flex items-center">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold font-heebo text-white">
            {navLinks}
          </ul>
        </div>
        <button className="btn btn-md lg:btn-lg bg-[#FEA116] hover:bg-[#e69113] border-0 text-white rounded-none px-6 ml-4">
          Book A Table
        </button>
      </div>
    </div>
  );
}

export default Navbar;