import React from 'react';
import CustomButton from '../reusable/CustomButton';
import i from '@/asset/imgs.png'
import star from '@/asset/Subtract.png'
import Image from 'next/image';
const LoggedBanner = () => {
    return (
        <div className=" hero  relative w-full mx-auto h-[298px] overflow-hidden  ">

            <div className='absolute items-center  inset-0 justify-center  lg:flex gap-5 xl:gap-10  bg-gradient-to-r from-[#03EED2CC] from-10% to-[#007182CC] to-30% '>
                <div>
                    <div className='flex w-full justify-start px-4 gap-5'>
                        <Image src={star} width={49} height={28} alt='star' className='object-contain ' />
                        <h1 className=' pt-5 text-xs lg:text-lg text-white'>No Ads & Unlock All Paid Songs</h1>
                    </div>
                    <h1 className='px-5 pt-2 md:pt-5 text-2xl xl:text-[65px] text-white font-[400] font-[Nico Moji]'>Premium Membership</h1>
                    <p className='px-5 lg:pt-6 text-base text-white font-[400] font-[Nico Moji]'>It is a long established fact that a is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p>

                    <div className='px-10 pt-7 md:flex gap-5 '>

                        <CustomButton w={'210px'} radius={'25px'} bgc={'#060606'} name={'Upgrade Now'}></CustomButton>
                        <CustomButton w={'210px'} radius={'25px'} bgc={'#09090999'} name={'Learn more'}></CustomButton>
                    </div>
                </div>
                <div className=' w-full  hidden lg:block lg:w-2/4  h-full'>
                    <Image src={i} width={174} height={295} alt='imgs' />
                </div>
            </div>

        </div>
    );
};

export default LoggedBanner;