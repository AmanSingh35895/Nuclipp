import React from 'react'
import Checkmark from '../../../../components/Checkmark'

const OurServices = ({ plan }) => {
    return (
        <div className='flex flex-col items-center gap-y-1 justify-start pt-20 h-[120vh] font-dm-sans w-full'>
            {/* title */}
            <div className='text-[3rem] text-[#191D23] font-bold'>
                Organic
                <span className='text-[#FF7171] '>YouTube</span>
                Automation Plan
            </div>
            {/* left box */}
            <div className='flex w-full gap-x-2 justify-center pt-2'>

                <div className='w-[38%] h-[80vh] rounded-[12px] text-[#191D23] flex flex-col items-start justify-start gap-y-2 py-10 px-4 duration-[0.5s]'>

                    <div className='text-[1.5rem] font-bold'>4-5 Minute Content</div>

                    <div className='font-normal text-[1rem]'>
                        Ideal for individuals who need Shorter Content for Cost saving
                    </div>
                    <div className='text-[3rem] flex items-center font-semibold'>
                        <span className={`line-through ${plan === 'monthly' ? 'hidden' : 'flex'} text-[2rem] text-[#191D23CC]/80 px-1`}>$1500</span>
                        {plan === 'monthly' ? '$500' : '$1349'}
                        <span className='text-[1rem] px-1 font-light'>/ Month</span>
                    </div>
                    <button className='border-[#FF7171] border rounded-[4px] text-[#FF7171] py-2 w-full font-semibold'>
                        Get Started Now
                    </button>
                    <div className={`font-medium text-[1rem] pt-8 ${plan === 'monthly' ? 'hidden' : 'flex'}`}>
                        <div className='inline'><Checkmark /></div>
                        <div>Save 10% Off with this Deal</div>
                    </div>
                    <div className={`font-medium text-[1rem] ${plan === 'monthly' ? 'pt-8' : 'mt-2'} flex`}>
                        <div className='inline'><Checkmark /></div>
                        <div>12 Videos Per Month</div>
                    </div>
                    <div className='font-medium text-[1rem] flex mt-2'>
                        <div className='inline'><Checkmark /></div>
                        <div>Limited to pre-roll ads</div>
                    </div>
                    <div className='font-medium text-[1rem] flex mt-2'>
                        <div className='inline'><Checkmark /></div>
                        <div>Quality Content</div>
                    </div>
                </div>
                {/* right box */}
                <div className={`w-[38%] ${plan === 'monthly' ? 'bg-[#FF7171]' : 'bg-[#FFBB00]'} h-[80vh] rounded-[12px] shadow-lg shadow-[#CCD9FF] text-white flex flex-col items-start justify-start gap-y-2 py-10 px-4 duration-[0.5s]`}>

                    <div className='text-[1.5rem] font-bold'>
                        8-10 Minute Content
                    </div>
                    <div className='font-normal text-[1rem]'>
                        Ideal for individuals who who need effective content with  Premiumness
                    </div>
                    <div className='text-[3rem] flex items-center font-semibold'>
                        <span className={`line-through ${plan === 'monthly' ? 'hidden' : 'flex'} text-[2rem] text-white/80 px-1`}>$2250</span>
                        {plan === 'monthly' ? '$750' : '$2100'}
                        <span className='text-[1rem] px-1 font-light'>/ Month</span>
                    </div>
                    <button className={`bg-white rounded-[4px] ${plan === 'monthly' ? 'text-[#FF7171]' : 'text-black'} py-2 w-full font-semibold`}>
                        Get Started Now
                    </button>
                    <div className={`font-medium text-[1rem] pt-8 ${plan === 'monthly' ? 'hidden' : 'flex'}`}>
                        <div className='inline'><Checkmark /></div>
                        <div>Save 10% Off with this Deal</div>
                    </div>
                    <div className={`font-medium text-[1rem] ${plan === 'monthly' ? 'pt-8' : 'mt-2'} flex`}>
                        <div className='inline'><Checkmark /></div>
                        <div>12 Videos Per Month</div>
                    </div>
                    <div className='font-medium text-[1rem] flex mt-2'>
                        <div className='inline'><Checkmark /></div>
                        <div>Allows for mid-roll ads</div>
                    </div>
                    <div className='font-medium text-[1rem] flex mt-2'>
                        <div className='inline'><Checkmark /></div>
                        <div>Higher CPM</div>
                    </div>
                    <div className='font-medium text-[1rem] flex mt-2'>
                        <div className='inline'><Checkmark /></div>
                        <div>High Quality Content</div>
                    </div>
                    <div className='font-medium text-[1rem] flex mt-2'>
                        <div className='inline'><Checkmark /></div>
                        <div>Higher engagement signals</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices