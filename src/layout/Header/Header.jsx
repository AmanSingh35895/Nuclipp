import React from 'react'

export const Header = () => {
  return (
    <div className='w-full h-[6rem] bg-[#FFFFFF] flex items-center px-[4rem] justify-between'>
      <img
        className='h-[3rem] w-[3rem] rounded-full'
        src='assets/images/LOGO_final 3.png'
        alt='LOGO_final 3'
      />
      <div className='flex w-[65%] justify-between font-semibold font-inter tracking-wide items-center'>
        <div className='flex w-[80%] justify-between'>
          <p>Home</p>
          <p>Our Story</p>
          <p>Services</p>
          <p>Results & Success</p>
          <p>Pricing</p>
          <p>More &gt;</p>
        </div>

        <button className='flex bg-[#9FD8DF] rounded-[5px] py-[12px] px-[18px]'>Get Started</button>
      </div>
    </div>
  )
}
