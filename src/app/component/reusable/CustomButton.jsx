import React from 'react';

const CustomButton = ({ name, w, bgc, radius }) => {
    return (
        <button className={`btn w-[${w}] h-[50px] rounded-[${radius}] bg-[${bgc}] text-[#FFFFFF] `}>
            {name}
        </button>
    );
};

export default CustomButton;