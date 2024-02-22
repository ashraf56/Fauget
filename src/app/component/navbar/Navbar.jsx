import Image from 'next/image';
import React from 'react';
import img from '@/asset/Heroicon.jpg'
import { FaMicrophone } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
    let user = false
    return (
        <div>
            <div className="navbar my-4 container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        </ul>
                    </div>
                    <a className=" font-[600]  text-white text-3xl">Welcome,claudia Alvies</a>
                </div>

                <div className="navbar-end">
                    {user ? <div className='gap-5 flex items-center'>


                        <div className=" flex w-[332px] justify-evenly  h-[50px] items-center bg-[#3B3B3B] rounded-[25px]">
                            <IoSearch />
                            <input type="text" placeholder="Artist, Music, Album, Etc" className="outline-none" />
                            <FaMicrophone />
                        </div>
                        <div >
                            <div className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <Image src={img} alt="T" width={50} height={50} />
                                </div>
                            </div>

                        </div></div> :
                        <div className='flex gap-6 justify-center'>
                            <button className='w-[210px] h-[50px] text-white bg-[#060606] text-lg rounded-[25px]'>Sign in </button>
                            <button className='w-[210px] h-[50px] text-white bg-[#3B3B3B33] text-lg rounded-[25px] border-[#000000CC] border-[1px]'>Sign Up</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;