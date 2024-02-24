import React from 'react';
import bann from '@/asset/Banner.png'
import Image from 'next/image';
import CustomButton from '../reusable/CustomButton';
const Banner = () => {

    return (

        <div className=" hero relative w-full min-h-[298px] xl:h-[298px] overflow-hidden  ">
            <Image src={bann} alt="Podcast Cover" width={1087} height={298} className="w-full min-h-full object-cover bg-opacity-15" />
            <div className='absolute inset-0 bg-gradient-to-r from-[#03EED2CC] from-10% to-[#0071822F] to-30% '>
                <h1 className='px-10 pt-5 text-xs lg:text-lg text-white'>Top play music station</h1>
                <h1 className='px-10 pt-2 md:pt-5 text-lg xl:text-[35px] text-white font-[400]'>The Dark Side of Music: Unveiling Its Negative Effects</h1>
                <p className='px-10 lg:pt-5 text-base text-white font-[400]'>Music, often regarded as a universal language, possesses a profound impact on individuals and societies alike. While it has long been celebrated for its ability to evoke emotions, foster connections, and uplift spirits, the flip side of the melody reveals a spectrum of adverse effects that are often overlooked</p>

                <div className='px-10 pt-5 '>
                    <button className='btn hidden sm:block bg-[#09090999] bg-opacity-10 w-[180px] h-[50px] rounded-[25px] text-white'>For you ?</button>
                </div>
            </div>

        </div>

    );
};

export default Banner;