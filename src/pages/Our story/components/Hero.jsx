import React from 'react';
import video2 from '../../../assets/images/Video2.png'

const Hero = () => {
  return (
    <div className='w-full flex justify-center min-h-screen shadow-xl shadow-[#0000000F] rounded-[15px] font-inter border-2 border-red-300 px-36 py-12'>
      <div className='w-[50%] h-full flex flex-col pl-[15%] pt-[5rem] border-2 border-red-300'>
        <p className='font-semibold text-[3rem] text-justify w-[50%] border-2 border-red-300'>Empowering Creators, Transforming Dreams</p>
        
        <p className='font-light text-justify text-[1rem] py-2 w-[61%] tracking-wider text-[#0F172A] my-2 border-2 border-red-300'>
        At NUCLIPP, we believe in turning YouTube ambitions into achievable realities. 
        </p>
        <p className='font-light text-justify text-[1rem] py-2 w-[61%] tracking-wider text-[#0F172A] my-2 border-2 border-red-300'>
        Our mission is to help creators worldwide achieve financial freedom through smart YouTube automation and seamless channel growth strategies
        </p>
        <button className='w-[40%] border-[1.5px] border-[#FF7171] py-[14px] px-[20px] rounded-[5px] font-inter font-semibold hover:bg-[#FF7171] hover:text-[#F8FAFC] duration-500 my-2'>Explore Our Journey</button>
      </div>
      <div className='w-[50%]  border-2 border-red-300 px-24 py-12' >
         <img src={video2} className="w-full h-autoo"/>
      </div>
    </div>
  );
};

export default Hero;
