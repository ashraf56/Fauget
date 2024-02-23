import React from 'react';

const Bigbuton = ({name,w}) => {
    return (
        <button className={`w-${w} h-[50px] btn bg-[#060606]`}>
{name}
        </button>
    );
};

export default Bigbuton;