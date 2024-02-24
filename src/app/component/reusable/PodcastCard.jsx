import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlinePlayCircle } from "react-icons/md";
const PodcastCard = ({ data }) => {

    return (
        <div>
            <div className="relative w-[190px] h-[198px] shadow-xl rounded-[35px] overflow-hidden">
                <Image src={data.album.cover} alt="Podcast Cover" width={180} height={180} className="w-full h-full object-cover brightness-50 bg-center" />
                <div className="absolute inset-0 flex justify-center items-center">
                    <Link href={`/podcastdetail?info=${data.title}&data=${data.album.cover_big}`}><MdOutlinePlayCircle className="text-white text-7xl" />
                    </Link>
                </div>
            </div>
            <h1 className="text-lg text-white px-5 py-3">Music</h1>
        </div>
    );
};

export default PodcastCard;