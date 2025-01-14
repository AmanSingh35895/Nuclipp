import React from 'react';
import BG from '../../../assets/images/BG.png';

const ProblemStatement = () => {
  return (
    <div className='w-full flex justify-center space-x-32 min-h-screen shadow-xl shadow-[#0000000F]  font-inter px-32 py-16'>
      <div className='w-[60%] h-full flex flex-col space-y-16 border-red-300 border-2 py-8 '>
        <div className='text-left  border-red-300 border-2'>
          <p className='font-semibold text-6xl'>Tired of Struggling?</p>
          <p className='font-normal text-[2rem] py-2'>We’ve Got You Covered</p>
        </div>
        <div className='border-red-300 border-2'>
          <p className='font-normal text-justify text-[1rem] py-2  tracking-wider text-[#0F172A]'>
            Creators worldwide struggle with Monetizing and  Managing their YouTube channels effectively.
          </p>
          <p className='font-normal text-justify text-[1rem] py-2 tracking-wider text-[#0F172A]'>
            Many give up, facing algorithm challenges, monetization policies, and the relentless demand for quality content. NUCLIPP is here to change that narrative.
          </p>
        </div>
      </div>
      <div className='w-[40%]'>
           <img src={BG} className="w-full h-auto" alt="Video promotion" />
      </div>
    </div>
  );
};

export default ProblemStatement;
