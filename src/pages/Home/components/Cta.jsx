import React from 'react';
import { Button } from '../../../components/Button';

const Cta = () => {
  return (
    <div className='w-full  shadow-xl shadow-[#0000000F] rounded-[15px]  font-inter '>
     <div className='flex flex-col space-y-4 pt-9 pb-14'>
      <div className='font-black text-[3rem] w-full text-center  py-4'>Ready to Take the First Step?</div>
      <div className='flex gap-9 justify-center '>
        <Button text={"Book a Call Now"}/>
        <Button text={"Explore Our Services"}/>
      </div>
     </div>
    </div>
  );
};

export default Cta;
