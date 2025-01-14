import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="w-full h-[6rem] bg-[#FFFFFF] flex items-center px-[4rem] justify-between">
      <img
        className="h-[3rem] w-[3rem] rounded-full"
        src="assets/images/LOGO_final 3.png"
        alt="LOGO_final 3"
      />
      <div className="flex w-[65%] justify-between font-semibold font-inter tracking-wide items-center">
        <div className="flex w-[80%] justify-between">
          <Link to="/">Home</Link>
          <Link to="/our_story">Our Story</Link>
          <Link to="/services">Services</Link>
          <Link to="/results">Results & Success</Link>
          <Link to="/picing">Pricing</Link>
          <div className='relative group'>
            <button className='flex items-center'>More &gt;</button>
            <div className='absolute hidden group-hover:block group-focus:block bg-white shadow-md mt-2 rounded'>
              <Link
                to='/contact-us'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
              >
                Contact us
              </Link>
              <Link
                to='/faq'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>

        <button className="flex bg-[#9FD8DF] rounded-[5px] py-[12px] px-[18px]">
          Book a call
        </button>
      </div>
    </div>
  );
};
