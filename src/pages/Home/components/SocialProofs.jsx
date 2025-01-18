import React from 'react';
import TextOverImage from '../../../components/TextOverImage';

const SocialProofs = () => {
  return (
    <div className='w-full flex flex-col min-h-screen shadow-xl shadow-[#0000000F] rounded-[15px] py-2 px-2 font-bold font-inter'>
      <div className='flex-col space-y-6 '>
        <div className='py-4'>
          <p className='text-[#0F172A] text-center w-full text-[3rem]'>Trusted by Content Creators Worldwide</p>
        </div>
        <div className='flex h-52 w-full bg-[#0F172A] font-inter'>
        </div>
      </div>
      <div className='flex justify-center items-center  min-h-screen px-32'>
        <div className='flex space-x-8  p-8'>
          <TextOverImage text1={"Pre-Monetized Channels"} text2={"Start earning from day one."} />
          <TextOverImage text1={"YouTube Channel Management:"} text2={"Simplified growth strategies for exponential results."}/>
        </div>
      </div>
    </div>
  );
};

export default SocialProofs;
