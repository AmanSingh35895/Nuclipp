import React from 'react';
import TextOverImage from "../../../components/TextOverImage"

const ServiceTeaser = () => {
  return (
    <div className='w-full min-h-screen flex  shadow-xl shadow-[#0000000F] rounded-[15px] px-16 py-12  '>
      <div className='w-[50%] h-full flex flex-col space-y-8 px-4 py-2 justify-center items-center'>
        <div className='flex space-x-6 w-full h-full'>
          <TextOverImage text1={"Pre-Monetized Channels"} text2={"Start earning from day one."} image = {"https://tse3.mm.bing.net/th?id=OIP.U_VJuupQohwnzXcKMztqWgHaEo&rs=1&pid=ImgDetMain"} />
          <TextOverImage text1={"YouTube Channel Management:"} text2={"Simplified growth strategies for exponential results."}/>
        </div>
        <div className='flex space-x-6 w-full h-full'>
            <TextOverImage text1={"Reused Content Appeal:"} text2={"A second chance for demonetized channels."}/>
            <TextOverImage text1={"Guaranteed Monetization in 3 Months:"} text2={"Success in record time."}/>
        </div>
      </div>
      <div className='w-[50%] h-full flex flex-col space-y-8 justify-center px-32 '>
        <p className='font-inter font-semibold text-6xl tracking-tighter  text-justify'>Your Partner in Success</p>
        <p className='text-[#0F172A] font-normal max-w-96 text-3xl tracking-wider my-2'>Explore our offerings that cater to your specific needs!</p>
        <button className='w-fit px-4 py-2 border-[1.5px] border-[#FF7171] bg-[#FF7171]  rounded-[5px] font-inter font-semibold text-[#F8FAFC] text-xl '>See How We Can Help You</button>
      </div>
    </div>
  );
};

export default ServiceTeaser;
