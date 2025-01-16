import React from 'react'
import TextOverImage from '../../../components/TextOverImage'

const CoreValues = ()=> {
  return (
    <div className="w-full min-h-screen shadow-xl shadow-[#0000000F] rounded-md font-inter p-12 ">
     <div className='flex flex-col space-y-16 h-full p-6 '>
      <div className='flex space-x-8 p-6 h-96 '>
          <TextOverImage text1="Trust" text2="We build transparent and honest partnerships." />
          <TextOverImage text1="Trust" text2="We build transparent and honest partnerships." />
        </div>
        <div className='flex space-x-8 p-6 h-96 '>
          <TextOverImage text1="Trust" text2="We build transparent and honest partnerships." />
          <TextOverImage text1="Trust" text2="We build transparent and honest partnerships." />
        </div>
     </div>
    </div>
  )
}

export default CoreValues