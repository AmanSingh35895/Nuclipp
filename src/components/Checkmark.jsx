import React from "react";
import CheckIcon from '../assets/images/checkmark.png'
const Checkmark = () => {
  return (
    <div className="bg-[#E8EDFB] rounded-full p-1 flex justify-center items-center h-[28px] w-[28px] mr-3">
      <img
        src={CheckIcon}
        alt="checkmark"
        className="object-contain h-[12px] w-[12px]"
      />
    </div>
  );
};

export default Checkmark;
