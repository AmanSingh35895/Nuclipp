import React from 'react';
import BG from '../../../assets/images/BG.png';

const ProblemStatement = () => {
  return (
    <div className='w-full flex justify-center space-x-32 min-h-screen shadow-xl shadow-[#0000000F]  font-inter px-32 py-16'>
      <div className='w-[60%] h-full flex flex-col space-y-16  py-8 '>
        <div className='text-left  flex-col space-y-4'>
          <p className='font-semibold text-6xl'>Tired of Struggling?</p>
          <p className='font-medium text-[2rem] py-2'>We’ve Got You Covered</p>
        </div>
        <div className=' max-w-[450px] flex flex-col space-y-8'>
          <p className='font-normal text-justify text-2xl py-2 leading-relaxed  tracking-wider text-[#0F172A]'>
            Creators worldwide struggle with <span className='font-semibold'>Monetizing</span> and  <span className='font-semibold'>Managing</span> their YouTube channels effectively.
          </p>
          <p className='font-normal text-justify text-2xl py-2 leading-relaxed tracking-wider text-[#0F172A]'>
           <span className='font-semibold'> Many give up</span>, facing algorithm challenges, 
           monetization policies, and the relentless demand for quality content. <span className='font-semibold'>NUCLIPP</span> is here to change that narrative.
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
