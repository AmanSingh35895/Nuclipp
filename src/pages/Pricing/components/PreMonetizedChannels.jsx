import React from 'react'
import Checkmark from '../../../components/Checkmark'

// helper component
const PreMonetizedChannel = ({ radius, bgColor, text1, cost, text2, text3 }) => {
    return <div className={`w-[23%] ${bgColor} h-[55vh] ${radius} shadow-lg shadow-[#CCD9FF] text-white flex flex-col items-start justify-start gap-y-2 pt-8 px-8 text-wrap`}>
        <div className='text-[1.5rem] font-bold'>{text1}</div>
        <div className='text-[3rem] flex items-center font-semibold'>${cost}<span className='text-[1rem] px-1 font-light'>/ Month</span></div>
        <button className='bg-white rounded-[4px] text-[#191D23] py-2 w-full font-semibold'>
            Get Started Now
        </button>
        <div className='font-medium text-[1rem] pt-8 flex w-full'>
            <div className='inline'><Checkmark /></div>
            <div>{text2}</div>
        </div>
        <div className='font-medium text-[1rem] mt-2 flex w-full'>
            <div className='inline'><Checkmark /></div>
            <div>{text3}</div>
        </div>

    </div>
}

// main component
export const PreMonetizedChannels = ({ plan }) => {
    return (
        <div className='flex flex-col items-center gap-y-1 justify-start font-dm-sans pt-24'>
            <div className='text-4xl text-[#191D23] font-bold'>Buy <span className='text-[#FFBB00] '>Pre-Monetized</span> Channels</div>
            <div className='flex w-full gap-x-2 justify-evenly pt-2 px-10'>
                <PreMonetizedChannel bgColor={`${plan === 'monthly' ? 'bg-[#FF7171B2]/70' : 'bg-[#FFBB00]/70'}`} radius={"rounded-[4px]"} text1={"Starter"}
                    cost={250} text2={"3,000 Subscribers"} text3={"Affordable option for new creators."}
                />
                <PreMonetizedChannel bgColor={`${plan === 'monthly' ? 'bg-[#FF7171B2]/80' : 'bg-[#FFBB00]/80'}`} radius={"rounded-[12px]"} text1={"Growth"}
                    cost={300} text2={"5,000 Subscribers"} text3={"Perfect for scaling your channel quickly."}
                />
                <PreMonetizedChannel bgColor={`${plan === 'monthly' ? 'bg-[#FF7171B2]/90' : 'bg-[#FFBB00]/90'}`} radius={"rounded-[12px]"} text1={"Professional"} cost={400} text2={"10,000 Subscribers"} text3={"Strong foundation for long-term growth."} />
                <PreMonetizedChannel bgColor={`${plan === 'monthly' ? 'bg-[#FF7171B2]/100' : 'bg-[#FFBB00]/100'}`} radius={"rounded-[12px]"} text1={"Elite"}
                    cost={500} text2={"20,000 Subscribers"} text3={"Accelerated growth and professional channel management."}
                />
            </div>
        </div>
    )
}
