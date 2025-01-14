import React from 'react';
import videoBanner from '../../../assets/images/Video.png'

const Hero = () => {
  return (
    <div className='flex flex-col items-center gap-y-4 justify-center min-h-screen pb-16  shadow-xl shadow-[#0000000F] rounded-[15px] mt-28'>
      <div className='flex flex-col justify-center items-center space-y-32'>
        <div className='flex flex-col justify-center items-center space-y-8'>
          <p className='font-inter font-semibold text-6xl tracking-tighter'>Turn your YouTube dream into reality</p>
          <p className='text-[#475569] text-lg max-w-96 text-center'>From Monetized Channels to Organic Growth, NUCLIPP Builds Your Success</p>
          <button className='border-[1.5px] border-[#FF7171] py-[14px] px-[20px] rounded-[5px] font-inter font-semibold hover:bg-[#FF7171] hover:text-[#F8FAFC] duration-500'>Start Your Journey Now</button>
        </div>
        <div className='w-auto max-w-[60%]'>
          <img src={videoBanner} className="w-full h-auto" alt="Video promotion" />
        </div>
     </div>
    </div>
  );
};

export default Hero;
