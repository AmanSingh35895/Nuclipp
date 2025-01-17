import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col items-center gap-y-4 justify-center h-[82vh]  shadow-xl shadow-[#0000000F] rounded-[15px]'>
      <p className='font-inter font-semibold text-[3rem]'>Have Questions? We’re Here to Help.</p>
      <p className='text-[#0F172A] font-normal w-[50%] text-center text-[1.5rem]'>Whether you’re ready to start your YouTube journey with us or have questions about our services, we’d love to hear from you.</p>
      <button className='border-[1.5px] border-[#FF7171] py-[14px] px-[20px] rounded-[5px] font-inter font-semibold bg-[#FF7171] text-[#F8FAFC] duration-500 mt-8'>Book a Free Consultation Now</button>
    </div>
  );
};

export default Hero;
