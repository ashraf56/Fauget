import Image from 'next/image';
import React from 'react';
import logo from '@/asset/Logo.svg';
const Signup = () => {
    return (
        <dialog id="my_modal_2" className="modal modal-middle  ">

            <div className="modal-box  bg-[#3B3B3B] max-w-[567px]  py-5">

                <div className="mx-auto justify-center items-center flex flex-col gap-6 ">
                    <div className='pt-10'>
                        <Image src={logo} alt='logo' width={210} height={40}></Image>
                    </div>
                    <h1 className='text-[39px] dark:text-white'>Sign up </h1>
                    <form method="dialog">
                        <div className="form-control w-[427px] mb-5 max-w-full">
                            <div className="label">
                                <span className="text-lg  dark:text-white ">Email:</span>
                            </div>
                            <input type="text" placeholder="example@mail.com" className="input input-bordered bg-[#0C0C0C] w-full max-w-full" required />

                        </div>
                        <div className="form-control w-[427px]  mb-5 max-w-full">
                            <div className="label">
                                <span className="text-lg dark:text-white ">Password:</span>
                            </div>
                            <input type="password" placeholder="....................." className="input input-bordered bg-[#0C0C0C] w-full max-w-full" required />

                        </div>
                        <div className="form-control w-[427px]   max-w-full">
                            <div className="label">
                                <span className="text-lg dark:text-white ">Password:</span>
                            </div>
                            <input type="password" placeholder="....................." className="input input-bordered bg-[#0C0C0C] w-full max-w-full" required />

                        </div>
                        <div className='form-control'>
                            <button type='submit' className='w-[210px] h-[50px] my-10 text-white bg-[#060606] text-lg rounded-[25px]'>Create an account </button>
                        </div>
                        <p className='text-center dark:text-white pb-5'> Have account? Sign in  account  <a className='text-[#040404]'> signin</a></p>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default Signup;