import React from 'react'
import Checkmark from '../../../../components/Checkmark'

const AddOnServices = ({ plan }) => {
  return (
    <div className='flex flex-col items-center gap-y-1 justify-start pt-20 h-[110vh] font-dm-sans w-full'>
      <div className='text-[1.5rem] text-[#FFBB00] bg-black rounded-[12px] font-bold py-1 px-3'>Earn From Day One</div>
      <div className='text-[3rem] text-[#191D23] font-bold pt-10'>Pre-Monetized  <span className='text-[#FF7171] '>YouTube</span> Automation Plan </div>
      <div className='flex w-full gap-x-2 justify-center pt-2'>
        <div className='w-[38%] h-[60vh] rounded-[12px] text-[#191D23] flex flex-col items-start justify-start gap-y-2 py-10 px-4'>

          <div className='text-[1.5rem] font-bold'>4-5 Minute Content</div>
          <div className='font-normal text-[1rem]'>Ideal for individuals who need Shorter Content for Cost saving</div>
          <div className='text-[3rem] flex items-center font-semibold'>{plan === 'monthly' ? '$500' : '$1349'}<span className='text-[1rem] px-1 font-light'>/ Month</span><span className='font-extrabold text-[1rem] px-1 '>+ Channel Price</span></div>
          <button className='border-[#FF7171] border font-semibold rounded-[4px] text-[#FF7171] py-2 w-full'>Get Started Now</button>
          <div className='font-medium text-[1rem] pt-8 flex'>
            <Checkmark />
            Same As Organic Automation
          </div>
          <div className='font-extrabold text-[1rem] pt-1 flex'>
            <Checkmark />
            Plus Selected Pre-Monetized channel
          </div>
        </div>

        <div className={`w-[38%] ${plan === 'monthly' ? 'bg-[#FF7171]' : 'bg-[#FFBB00]'} h-[60vh] rounded-[12px] shadow-lg shadow-[#CCD9FF] text-white flex flex-col items-start justify-start gap-y-2 py-10 px-4`}>

          <div className='text-[1.5rem] font-bold'>
            8-10 Minute Content
          </div>
          <div className='font-normal text-[1rem]'>
            Ideal for individuals who who need effective content with  Premiumness</div>
          <div className='text-[3rem] flex items-center font-semibold'>{plan === 'monthly' ? '$750' : '$2100'}
            <span className='text-[1rem] px-1 font-light'>/ Month</span>
            <span className='font-extrabold text-[1rem] px-1 '>+ Channel Price</span>
          </div>
          <button className={`bg-white rounded-[4px] font-semibold ${plan === 'monthly' ? 'text-[#FF7171]' : 'text-black'} py-2 w-full`}>
            Get Started Now
          </button>
          <div className='font-medium text-[1rem] pt-8 flex'>
            <Checkmark />
            Same As Organic Automation
          </div>
          <div className='font-extrabold text-[1rem] flex pt-2'>
            <Checkmark />
            Plus Selected Pre-Monetized channel
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddOnServices