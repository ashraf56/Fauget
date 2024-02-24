import React from 'react';
import imgs from '@/asset/pod.jpg'
import trk from '@/asset/trck.svg'
import Image from 'next/image';
import { MdOutlinePlayCircle } from 'react-icons/md';
const PodcastDetail = ({ data, info }) => {
    return (
        <div>
            <div className="relative w-full h-[346px] shadow-xl  overflow-hidden">
                <Image src={data} alt="Podcast Cover" width={1080} height={346} className="w-full h-full object-cover brightness-50" />
                <div className='absolute inset-0 '>
                    <h1 className='px-10 pt-5 text-lg text-white'>{info}</h1>

                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center ">
                    <MdOutlinePlayCircle className="text-white text-7xl " />
                    <div className='absolute bottom-14' >   <Image src={trk} alt="Podcast Cover" width={729} height={1} /> </div>
                </div>



            </div>
            <div className="text-lg text-white text-start w-[800px] py-3">Music, often regarded as a universal language, possesses a profound impact on individuals and societies alike. While it has long been celebrated for its ability to evoke emotions, foster connections, and uplift spirits, the flip side of the melody reveals a spectrum of adverse effects that are often overlooked</div>


        </div>

    );
};

export default PodcastDetail;