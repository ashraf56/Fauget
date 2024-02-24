import React from 'react';
import CustomButton from './CustomButton';

const Groupebtn = ({bt}) => {
    return (
        <div>
             <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 my-7 mx-auto '>
                {bt.map(b => (
                    
                    <CustomButton key={b.id} w={'147px'} radius={'25px'} bgc={'#3B3B3B'} name={b.name}/>
                    ))}
            </div>
        </div>
    );
};

export default Groupebtn;