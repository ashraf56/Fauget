'use client'
import React, { useContext, useState } from 'react';
import line from '@/asset/Line.svg'
import Image from 'next/image';
import logo from '@/asset/Logo.svg';
import { IoMdHome } from "react-icons/io";
import { PiMusicNoteFill } from "react-icons/pi";
import { LuLogOut } from "react-icons/lu";
import { MdQueueMusic } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import './Sidebar.css'
import Link from 'next/link';
import { UserContext } from '@/context/UserProvider';
const Sidebar = () => {
    let { user, handleLogout } = useContext(UserContext)
    const menus1 = [
        { name: "Home", link: "/", icon: IoMdHome },
        { name: "Podcast", link: "/podcastmain", icon: PiMusicNoteFill },
        { name: "Setting", link: "/setting", icon: IoSettingsOutline },
    ];
    const menus2 = [
        { name: "Playlist #A", link: "/", icon: IoMdHome },
        { name: "Playlist #B", link: "/", icon: PiMusicNoteFill },
        { name: "Playlist #C", link: "/", icon: IoMdHome },
        { name: "Add New +", link: "/", icon: IoMdHome },
    ];

    return (
        <>
            <ul className=" custommenu  p-5 w-[253px] min-h-full bg-[#3B3B3B] text-white relative ">

                <div className='text-center mx-auto my-6 l'>
                    <Image src={logo} width={210} height={40} alt='line' />
                </div>
                <div className='flex px-5 gap-5 py-4 text-xl'>
                    <p className='font-bold text-white'>Menu</p>
                    <Image src={line} width={70} height={30} alt='line' /></div>
                <div>
                    {menus1.map((m, i) => (<li key={i}  ><Link href={`${m.link}`}>

                        <span className='pe-2'>{React.createElement(m?.icon, { size: "20" })}</span>{m.name}


                    </Link>

                    </li>))}
                    {user && <li onClick={handleLogout}><span> <span className='pe-2'><LuLogOut /></span>Logout</span></li>}
                </div>

                <div className='absolute bottom-4'>
                    <div className='flex px-5 gap-5 py-4 text-xl'>
                        <p className='font-bold text-white'>My Playlist</p>
                        <Image src={line} width={40} height={30} alt='line' /></div>
                    <div>
                        {menus2.map((m, i) => (<li key={i}>
                            <span>
                                <div className='pe-2'><MdQueueMusic /></div>{m.name}
                            </span>
                        </li>))}
                    </div>
                </div>
            </ul>
        </>
    );
};

export default Sidebar;