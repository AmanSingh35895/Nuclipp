import React from 'react';
import TextOverImage from '../../../../components/TextOverImage';

const ServiceTeaser = () => {
  return (
    <div className='w-full flex h-screen shadow-xl shadow-[#0000000F] rounded-[15px] py-2 px-2'>
      <div className='w-[60%] h-full flex flex-wrap justify-center items-center'>
        <TextOverImage text1={"nkdbkecr"} text2={"ewf"} />
        <TextOverImage />
        <TextOverImage />
        <TextOverImage />
      </div>
      <div className='w-[40%] h-full flex flex-col justify-center'>
        <p className='font-inter font-semibold text-[3rem] w-[60%] text-justify mb-1'>Your Partner in Success</p>
        <p className='text-[#0F172A] font-light w-[53%] text-[1.5rem] tracking-wider my-2'>Explore our offerings that cater to your specific needs!</p>
        <button className='w-[40%] border-[1.5px] border-[#FF7171] bg-[#FF7171] py-[14px] px-[10px] rounded-[5px] font-inter font-semibold text-[#F8FAFC] text-[1rem] mt-10'>See How We Can Help You</button>
      </div>
    </div>
  );
};

export default ServiceTeaser;
