import React from 'react';

const ProblemStatement = () => {
  return (
    <div className='w-full flex justify-center h-screen shadow-xl shadow-[#0000000F] rounded-[15px] font-inter'>
      <div className='w-[50%] h-full flex flex-col pl-[15%] pt-[5rem]'>
        <p className='font-semibold text-[3rem]'>Tired of Struggling?</p>
        <p className='font-normal text-[2rem] py-2'>We’ve Got You Covered</p>
        <p className='font-normal text-justify text-[1rem] py-2 w-[61%] tracking-wider text-[#0F172A]'>
          Creators worldwide struggle with Monetizing and  Managing their YouTube channels effectively.
        </p>
        <p className='font-normal text-justify text-[1rem] py-2 w-[61%] tracking-wider text-[#0F172A]'>
          Many give up, facing algorithm challenges, monetization policies, and the relentless demand for quality content. NUCLIPP is here to change that narrative.
        </p>
      </div>
      <div className='w-[50%]'>
      </div>
    </div>
  );
};

export default ProblemStatement;
