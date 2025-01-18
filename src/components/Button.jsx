import React from 'react'

export const Button = ({text}) => {
  return (
    <button 
        className='text-xl border-[1.5px] border-[#FF7171] py-[14px] px-[20px] rounded-[5px] font-inter font-semibold hover:bg-[#FF7171] hover:text-[#F8FAFC] duration-500'>
        {text}
    </button>
  )
}
