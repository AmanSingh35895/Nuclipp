import React from 'react';
import Switch from 'react-switch';
import arrow from '../../../assets/images/arrow.png'
export const Hero = ({plan,setPlan}) => {

  const handleChange = (checked)=>{
    checked? setPlan('quaterly'):setPlan('monthly')
  }

  return (
    <div className='flex flex-col text-justify items-center gap-y-1 justify-start pt-40 h-[66vh] font-dm-sans'>
      <p className='font-inter font-bold text-[3rem]'>
        Powerful features for
      </p>
      <p className='text-[#FF7171] text-[3rem] font-bold text-center'>
        powerful creators
      </p>
      <p className='text-[#191D23] text-[1.5rem] pt-2 font-normal w-[25%] text-center'>
        Choose a plan that’s right for you
      </p>
      <div className='flex text-[#191D23] gap-x-4 pt-[4rem] font-normal text-[1rem] w-fit pl-40'>
        <span>Pay Monthly </span>
        <Switch
          onChange={handleChange} 
          checkedIcon={false}
          uncheckedIcon={false}
          onColor='#FFBB00'
          offColor='#FF7171'
          checked={plan === 'monthly' ? false : true}
        />
        <span>Pay Quaterly</span>
        <span className='text-[#FF7171] flex'>
          <img 
            src={arrow}
            alt='arrow'
            className='h-[4rem] w-[5rem] '
          />
          <span className='pt-8 font-medium'><span>Save up to 20%</span></span>
        </span>
      </div>
    </div>
  );
};