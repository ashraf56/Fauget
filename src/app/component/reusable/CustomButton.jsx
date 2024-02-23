import React from 'react';

const CustomButton = ({name,w,bgc,radius,LoginModal}) => {
    return (
        <button className={`w-[${w}] h-[50px] rounded-[${radius}] bg-[${bgc}] text-[#FFFFFF] `}>
{name}
        </button>
    );
};

export default CustomButton;