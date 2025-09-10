'use client';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";


export default  function Login(){
    return (
        <>
            <div className='bg-white'>
                <header className="flex items-center justify-between bg-[#020A1A] py-4 px-6" >
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600" />
                        <span className="font-semibold tracking-wide text-2xl text-white">Huza</span>
                    </div>

                    <div className="flex items-center float-right gap-3 text-[14.5px]">
                        <Link href="/signup" className="px-6 py-2 rounded-2xl border  text-white border-white/80 hover:border-white/60">
                            Sign up
                        </Link>
                        <Link href="/login" className="w-30 py-2 text-center rounded-2xl border bg-[#fff] text-[#020A1A] hover:bg-[#fff]">
                            Login
                        </Link>
                    </div>
                </header>


                <div className='flex max-h-screen'>
                    <div className='bg-white flex-1 flex justify-center p-8'>
                        <form className='text-center'>
                            <h1 className='text-4xl text-black font-semibold mb-5 mt-10'>Welcome <span className='text-4xl text-[#6572FF]'>Back!</span></h1>
                            <p className='text-black/90'>Enter your  email, role and password to access your account!</p>
                            
                            <div className='my-[30px] text-sm outline-none'>
                                <input type="email" placeholder='Email Address' className="w-full py-3 px-4 my-2 border-[1.5px] border-l-4 border-l-black border-[#C1BBBB] text-black/60" ></input><br></br>
                                <select className='w-full py-3 px-4 my-2 border-[1.5px] border-l-4 border-l-black border-[#C1BBBB] text-black/60' defaultValue="" >
                                    <option value="" disabled > Choose Role</option>
                                    <option value="organisation">Organisation</option>
                                    <option value="innovation">Innovators</option>
                                </select><br></br>
                                <input type="password" placeholder='Password' className="w-full py-3 px-4 my-2 border-[1.5px]  border-l-4 border-l-black border-[#C1BBBB] text-black/60" ></input><br></br>

                                <div className='flex justify-between text-black mt-2'>
                                    <div className='flex items-center space-x-2'>
                                        <input type="checkbox" className='accent-black'></input>
                                        <label className='' >Remember Me</label>
                                    </div>
                                    <label >Forgot Password?</label>
                                </div>
                            </div>
                            

                            <div className="flex items-center justify-center gap-3 text-[14px]">
                                <Link href="/login" className="w-25 py-2 border bg-black text-white border-white/80 hover:border-white/60">
                                    Login
                                </Link>
                                <Link href="/signup" className="w-25 py-2 text-center border bg-[#fff] text-[#020A1A] hover:bg-[#12151f] hover:text-white">
                                    Sign Up
                                </Link>
                            </div>

                            <div>
                                <p className='my-5 text-black/50 text-[15px]'><u>or Login with</u></p>
                                <div className='flex items-center justify-center text-[#6572FF] font-semibold space-x-25 text-[15px] mb-4'>
                                    <FaLinkedin className='text-2xl' />
                                    <FcGoogle className="text-2xl" />
                                    <SiFacebook className="text-2xl text-blue-600" />
                                </div>
                            </div>

                        </form>
                    </div>

                    <div className=" flex-1 bg-[#010917] ">
                        <h1 className="text-3xl text-white text-center font-semibold" >Connection problems to solutions all with <span className='text-[#6572FF]'>HUZA</span></h1>
                        <p className="text-[15px] text-white/80 text-center my-6">We are linking dreams with innovation by providing tech solutions evrywhere!</p>

                        <img src="/Login image.png" />
                        <div className='flex items-center justify-center space-x-2 my-3'>
                            <span className='w-30 h-[4px] bg-[#6572FF]'></span>
                            <span className='w-30 h-[4px] bg-[#fff]'></span>
                            <span className='w-30 h-[4px] bg-[#fff]'></span>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
