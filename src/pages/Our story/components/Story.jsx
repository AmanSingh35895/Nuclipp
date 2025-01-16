import React from 'react'
import TextOverImage from '../../../components/TextOverImage'

const Story = () => {
    return (
        <div className='w-full flex justify-center min-h-screen shadow-xl shadow-[#0000000F] rounded-md font-inter border-2 border-red-300 px-24 py-12'>
            <div className=' flex space-x-16 border-2 h-full border-red-300 '>
                <div className='flex-1 h-full flex flex-col space-y-8 border-2 border-red-300 p-6'>
                    <div className='h-56 border-red-300 border-2'>
                       <TextOverImage text1={''} text2={''}/>
                    </div>
                    <div className='h-56 border-red-300 border-2'>
                       <TextOverImage text1={''} text2={''}/>
                    </div>
                    <div className='h-56 border-red-300 border-2'>
                       <TextOverImage text1={''} text2={''}/>
                    </div>
                </div>
                <div className='flex-1 h-full flex flex-col space-y-4 border-2 border-red-300 pt-4'>
                    <p className='font-semibold text-[3rem] border-2 border-red-300'>Our Story</p>

                    <p className='font-light text-justify  tracking-wider text-[#0F172A]  border-2 border-red-300'>
                        NUCLIPP began with a simple idea: creators deserve a platform that understands their challenges and helps them succeed.
                    </p>
                    <p className='font-light text-justify tracking-wider text-[#0F172A]  border-2 border-red-300'>
                        Founded by passionate innovators, we started as a small team with a big dream to simplify YouTube growth and make monetization accessible to everyone.
                    </p>
                    <p className='font-light text-justify tracking-wider text-[#0F172A]  border-2 border-red-300'>
                        Today, NUCLIPP is a trusted leader in YouTube automation, empowering hundreds of creators to unlock their full potential.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Story