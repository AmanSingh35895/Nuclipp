import React from 'react';

const Cta = () => {
  return (
    <div className='w-full flex flex-col h-[40vh] shadow-xl shadow-[#0000000F] rounded-[15px] py-2 px-2 font-inter'>
      <p className='font-black text-[3rem] w-full text-center'>Ready to Take the First Step?</p>
      <div className='flex justify-center'>
      <button className='w-fit border-[1.5px] border-[#FF7171] bg-[#FF7171] py-[14px] px-[20px] rounded-[5px] font-inter font-bold text-[#F8FAFC] text-[1rem] mt-10 mx-3'>Book a Call Now</button>
      <button className='w-fit border-[1.5px] border-[#FF7171] bg-[#FF7171] py-[14px] px-[20px] rounded-[5px] font-inter font-bold text-[#F8FAFC] text-[1rem] mt-10 mx-3'>Explore Our Services</button>
      </div>
    </div>
  );
};

export default Cta;
