import Image from 'next/image';
import React from 'react';
import imgs from '@/asset/pod.jpg'
import { MdOutlinePlayCircle } from "react-icons/md";
const PodcastCard = ({data}) => {
    let i=  imgs
    return (
        <div>
            <div className="card w-[190px] h-[198px]  shadow-xl   rounded-[35px] backdrop-brightness-105 " style={{
                backgroundImage:`url(${data.album.cover})`, backgroundSize:'cover',objectFit:'contain', 
            }}>
                <div className="card-body  justify-center items-center mx-auto">
               
                   <div className='text-white w-full text-center bg-opacity-0'>
                   <MdOutlinePlayCircle className=' text-7xl' />
                   </div>
                    <div className="card-actions justify-end">
                       
                    </div>
                </div>
            </div>
            <h1 className='text-lg text-white px-5 py-3'>Music</h1>
        </div>
    );
};

export default PodcastCard;