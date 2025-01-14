import React from 'react'

export const Footer = () => {
  return (
    <div className='border-b-[5px] border-b-[#9FD8DF] bg-[#F7F9FC] font-inter py-[2rem]'>
      <div className='w-full flex justify-center'>
        <img
          className='h-[3rem] w-[3rem] rounded-full'
          src='assets\images\LOGO_final 3.png'
          alt='LOGO_final 3'
        />
      </div>
      <div className="w-full flex flex-col items-center py-[2rem]">
        <p className='font-semibold text-[2rem] w-[35%] flex flex-wrap text-center'>
          Get started to up your business
          with personal AI manager
        </p>
        <div className='w-full flex items-center justify-center p-[1rem] gap-[1rem]'>
        <img src='assets/images/vector.png' className='h-[17px] w-[17px] mr-[22%] z-1 absolute'/>
          <input
            className='bg-transparent border-[1px] border-[#8E8E8E80] rounded-[50px] placeholder:text-center placeholder:text-[#071412B2] font-semibold font-plus-jakarta-sans w-[20%] py-[12px] px-[5px] z-0 pl-[4rem]'
            placeholder='Enter your email'
          />
          <button className='flex bg-[#9FD8DF] border-[1px] border-[#9FD8DF] rounded-[50px] py-[12px] px-[25px] font-plus-jakarta-sans font-bold tracking-wide'>Try Now</button>
        </div>
        <div className='flex w-full justify-center gap-[3.5rem] font-inter font-semibold'>
          <p>Learn More About Us</p>
          <p>Explore Our Services</p>
          <p>See Client Results</p>
          <p>Contact Us for a Free Consultation</p>
        </div>
      </div>
    </div>
  )
}
