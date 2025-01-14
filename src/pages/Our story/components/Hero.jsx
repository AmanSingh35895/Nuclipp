import React from 'react';

const Hero = () => {
  return (
    <div className='w-full flex justify-center h-[110vh] shadow-xl shadow-[#0000000F] rounded-[15px] font-inter'>
      <div className='w-[50%] h-full flex flex-col pl-[15%] pt-[5rem]'>
        <p className='font-semibold text-[3rem] text-justify w-[50%]'>Empowering Creators, Transforming Dreams</p>
        
        <p className='font-light text-justify text-[1rem] py-2 w-[61%] tracking-wider text-[#0F172A] my-2'>
        At NUCLIPP, we believe in turning YouTube ambitions into achievable realities. 
        </p>
        <p className='font-light text-justify text-[1rem] py-2 w-[61%] tracking-wider text-[#0F172A] my-2'>
        Our mission is to help creators worldwide achieve financial freedom through smart YouTube automation and seamless channel growth strategies
        </p>
        <button className='w-[40%] border-[1.5px] border-[#FF7171] py-[14px] px-[20px] rounded-[5px] font-inter font-semibold hover:bg-[#FF7171] hover:text-[#F8FAFC] duration-500 my-2'>Explore Our Journey</button>
      </div>
      <div className='w-[50%]'>
      </div>
    </div>
  );
};

export default Hero;
