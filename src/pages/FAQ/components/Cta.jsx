import React from 'react';

const Cta = () => {
    return (
        <div className='w-full h-[60vh] flex justify-center'>
            <div className='w-[90%] flex flex-col items-center h-[80%] gap-y-4 shadow-xl shadow-[#0000000F] rounded-[15px]'>
                <img src='assets/images/avatar.png' alt='avatar' className='h-[3.5rem] w-[7.5rem]' />
                <p className='text-[#101828] font-inter font-medium text-[1.5rem]'>Didn’t find what you were looking for?</p>
                <p className='text-[#667085] font-normal w-[50%] text-center text-[1.25rem]'>Contact us for personalized assistance!</p>
                <button className='border-[1px] border-[#9FD8DF] py-[14px] px-[20px] rounded-[5px] font-inter font-semibold bg-[#9FD8DF] text-[#000000] duration-500 mt-8'>Get in touch</button>
            </div>
        </div>

    );
};

export default Cta;
