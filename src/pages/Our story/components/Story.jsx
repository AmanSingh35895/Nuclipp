import React from 'react'
import TextOverImage from '../../../../components/TextOverImage'

const Story = () => {
    return (
        <div className='w-full flex justify-center h-[110vh] shadow-xl shadow-[#0000000F] rounded-[15px] font-inter'>
            <div className='w-[50%] flex flex-col'>
                <TextOverImage text1={''} text2={''}/>
                <TextOverImage text1={''} text2={''}/>
                <TextOverImage text1={''} text2={''}/>
            </div>
            <div className='w-[50%] h-full flex flex-col pl-[15%] pt-[5rem]'>
                <p className='font-semibold text-[3rem] text-justify w-[50%]'>Our Story</p>

                <p className='font-light text-justify text-[1rem] py-2 w-[61%] tracking-wider text-[#0F172A] my-2'>
                    NUCLIPP began with a simple idea: creators deserve a platform that understands their challenges and helps them succeed.
                </p>
                <p className='font-light text-justify text-[1rem] py-2 w-[61%] tracking-wider text-[#0F172A] my-2'>
                    Founded by passionate innovators, we started as a small team with a big dream to simplify YouTube growth and make monetization accessible to everyone.
                </p>
                <p className='font-light text-justify text-[1rem] py-2 w-[61%] tracking-wider text-[#0F172A] my-2'>
                    Today, NUCLIPP is a trusted leader in YouTube automation, empowering hundreds of creators to unlock their full potential.
                </p>
            </div>

        </div>
    )
}

export default Story