import React from 'react';
import Switch from 'react-switch';

const Hero = ({plan,setPlan}) => {

  const handleChange = (checked)=>{
    checked? setPlan('quaterly'):setPlan('monthly')
  }

  return (
    <div className='flex flex-col text-justify items-center gap-y-1 justify-start pt-40 h-[59vh] font-dm-sans'>
      <p className='font-inter font-bold text-[3rem]'>
        Powerful features for
      </p>
      <p className='text-[#FF7171] text-[3rem] font-bold text-center'>
        powerful creators
      </p>
      <p className='text-[#191D23] text-[1.5rem] font-normal w-[25%] text-center'>
        Choose a plan that’s right for you
      </p>
      <div className='flex text-[#191D23] gap-x-4 pt-10 font-normal text-[1rem]'>
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
      </div>
    </div>
  );
};

export default Hero;
