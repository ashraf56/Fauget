'use client'
import Image from 'next/image';
import React, { useContext } from 'react';
import img from '@/asset/Heroicon.jpg'
import { FaMicrophone } from "react-icons/fa6";
import { IoHome, IoSearch } from "react-icons/io5";
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import CustomButton from '../reusable/CustomButton';
import { MdOpenInBrowser } from 'react-icons/md';
import { UserContext } from '@/context/UserProvider';
const Navbar = () => {
    let { user } = useContext(UserContext)

    const LoginModal = () => {
        const modal = document.getElementById('my_modal_1');
        if (!modal) {
            return
        }
        else {
            modal.showModal();
        }

    };
    const SignupModal = () => {
        const modal = document.getElementById('my_modal_2');
        if (!modal) {
            return
        }
        else {
            modal.showModal();
        }

    };

    return (
        <div>
            <div className="navbar my-4 container  ">
                <div className="navbar-start">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-96">
                            {user ? <div className='gap-5 flex-col flex items-center'>


                                <div className=" flex w-[332px] justify-evenly  h-[50px] items-center bg-[#3B3B3B] rounded-[25px]">
                                    <IoSearch />
                                    <input type="text" placeholder="Artist, Music, Album, Etc" className="outline-none" />
                                    <FaMicrophone />
                                </div>
                            </div> :
                                <div className='flex flex-col gap-6 justify-center'>

                                    <a onClick={LoginModal}> <CustomButton w={'210px'} bgc={'#060606'} name={'Sign in'} radius={'25px'} /> </a>
                                    <a onClick={SignupModal}> <CustomButton w={'210px'} bgc={'#3B3B3B33'} name={'Sign up'} radius={'25px'} /> </a>

                                </div>
                            }
                        </ul>
                    </div>
                    <a className=" font-[600]  text-white text-base  lg:text-3xl">Welcome,claudia Alvies</a>
                </div>

                <div className="navbar-end hidden lg:block">
                    {user ? <div className='gap-5 flex justify-end  '>


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

                            <a onClick={LoginModal}> <CustomButton w={'210px'} bgc={'#060606'} name={'Sign in'} radius={'25px'} /> </a>
                            <a onClick={SignupModal} className='border-[#000000CC] border-[1px] rounded-[25px] '> <CustomButton w={'210px'} bgc={'#3B3B3B33'} name={'Sign up'} radius={'25px'} /> </a>

                        </div>
                    }
                </div>

                <div className='navbar-end  lg:hidden '>
                    <div className='flex justify-end  gap-4 '>
                        {user && <div className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image src={img} alt="T" width={50} height={50} />
                            </div>
                        </div>}
                        <label htmlFor="my-drawer-2" className="btn btn-circle drawer-button lg:hidden">
                            <IoHome />
                        </label>
                    </div>

                </div>



            </div>
            {/* all modals dialog will appear here */}
            <Login></Login>
            <Signup></Signup>
        </div>
    );
};

export default Navbar;