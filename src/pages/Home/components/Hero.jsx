import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col items-center gap-y-4 justify-center h-screen  shadow-xl shadow-[#0000000F] rounded-[15px]'>
      <p className='font-inter font-semibold text-[3rem]'>Turn your YouTube dream into reality</p>
      <p className='text-[#475569] font-normal w-[25%] text-center'>From Monetized Channels to Organic Growth, NUCLIPP Builds Your Success</p>
      <button className='border-[1.5px] border-[#FF7171] py-[14px] px-[20px] rounded-[5px] font-inter font-semibold hover:bg-[#FF7171] hover:text-[#F8FAFC] duration-500'>Start Your Journey Now</button>
    </div>
  );
};

export default Hero;
