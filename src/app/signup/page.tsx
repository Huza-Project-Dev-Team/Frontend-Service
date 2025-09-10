'use client';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInnosoft } from "react-icons/fa";
import { CgOrganisation } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";





export default  function Signup(){

    const [selected, setSelected] = useState<string | null> (null);

    return (
        <>
            <div className='bg-white overflow-hidden'>
                <header className="flex items-center justify-between bg-[#020A1A] py-4 px-6" >
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600" />
                        <span className="font-semibold tracking-wide text-2xl text-white">Huza</span>
                    </div>

                    <div className="flex items-center float-right gap-3 text-[14.5px]">
                        <Link href="/signup" className="px-6 py-2 rounded-2xl border text-[#020A1A] bg-white border-white/80 hover:border-white/60">
                            Sign up
                        </Link>
                        <Link href="/login" className="w-30 py-2 text-center rounded-2xl border text-[#fff] hover:bg-[#0000]">
                            Login
                        </Link>
                    </div>
                </header>


                <div className='flex'>
                    <div className=" flex-1 bg-[#010917] ">
                        <h1 className="text-4xl text-white  my-6 text-center font-semibold" >Welcome  <span className='text-[#6572FF]'>to</span></h1>
                        <img src="/logo.png" className='mx-auto w-24 h-10 my-6' />
                        <h1 className='text-9xl font-semibold  text-center my-4 text-white'>HUZA</h1>
                        <p className="text-[15px] text-white/80 text-center my-4 mx-15">where we connect innovators, organisations and companies to solve real world problems.</p>
                        <img src="/Login image.png" className='w-70 h-50 float-right m-6'/>
                        <div className='w-60 h-60 overflow-hidden  relative top-60 right-30 rounded-full bg-gradient-to-br from-white to-[#1048C5]'></div>
                    </div>


                    <div className='bg-white flex-1 flex justify-center p-8'>
                        <form className='text-center'>
                            <h1 className='text-3xl text-black text-start font-semibold mb-5 mt-6'>Sign up to <br></br><span className='text-3xl text-[#6572FF]'>HUZA!</span></h1>
                            <p className='text-black/90'>Enter your  email, role and password to access your account!</p>
                            
                            <div className='my-[30px] text-sm outline-none'>
                                <div className="w-full flex items-center space-x-8" >
                                    <input type="text" placeholder='First Name' className="py-3 px-4 my-2 border-[1.5px] border-l-4 border-l-black border-[#C1BBBB] text-black/60" ></input><br></br>
                                    <input type="text" placeholder='Last Name' className="py-3 px-4 my-2 border-[1.5px] border-l-4 border-l-black border-[#C1BBBB] text-black/60" ></input><br></br>
                                </div>

                                <input type="email" placeholder='Email Address' className="w-full py-3 px-4 my-2 border-[1.5px] border-l-4 border-l-black border-[#C1BBBB] text-black/60" ></input><br></br>
                                
                                <input type="password" placeholder='Password' className="w-full py-3 px-4 my-2 border-[1.5px]  border-l-4 border-l-black border-[#C1BBBB] text-black/60" ></input><br></br>
                                
                                <div className='flex items-center space-x-2 my-4'>
                                    <input type="checkbox" className='accent-black bg-black border-none'></input>
                                    <label className='text-black'>Select Your Role</label>
                                </div>

                                <div className="">
                                    {/* Inputs */}
                                    <div className="w-full flex items-center space-x-8">
                                        {/* Innovator Input */}
                                        <div className={`flex items-center cursor-pointer`} onClick={() => setSelected("innovator")}>
                                            <FaInnosoft className="relative text-2xl text-black left-8" />
                                            <input type="text" readOnly placeholder="Innovator/Student" className={`text-center py-3 px-4 rounded-2xl border-[1.5px] border-[#676666] text-black cursor-pointer ${selected === "innovator" ? "border-black placeholder:text-black" : "border-[#676666] text-black/60"}`}/>
                                        </div>

                                        {/* Organisation Input */}
                                        <div className={`flex items-center cursor-pointer `} onClick={() => setSelected("organisation")}>
                                            <CgOrganisation className="relative text-2xl text-black left-10" />
                                            <input type="text" readOnly placeholder="Organisation" className={`text-center py-3 px-4 rounded-2xl border-[1.5px] border-[#676666] text-black cursor-pointer ${ selected === "organisation" ? "border-black placeholder:text-black" : "border-[#676666] text-black/60"}`} />
                                        </div>
                                    </div>

                                    {/* Conditional Forms */}
                                    <div className="mt-6">
                                        {selected === "innovator" && (
                                        <div className="space-y-3 text-black/60 mx-auto">
                                            
                                            <input
                                            type="text"
                                            placeholder="Uplaod Portfolio (Optional)"
                                            className="w-full border px-3 py-3 rounded-lg"
                                            />
                                            <input
                                            type="text"
                                            placeholder="Confirm Password"
                                            className="w-full border px-3 py-3 rounded-lg"
                                            />
                                            
                                        </div>
                                        )}

                                        {selected === "organisation" && (
                                        <div className="space-y-3 text-black/60 mx-auto">
                                            
                                            <input
                                            type="text"
                                            placeholder="Organisation Name"
                                            className="w-full border px-3 py-3 rounded-lg"
                                            />
                                            <input
                                            type="text"
                                            placeholder="Organisation Type"
                                            className="w-full border px-3 py-3 rounded-lg"
                                            />
                                            <input
                                            type="text"
                                            placeholder="Organisation website URL (optional)"
                                            className="w-full border px-3 py-3 rounded-lg"
                                            />
                                            <input
                                            type="password"
                                            placeholder="Confirm Password"
                                            className="w-full border px-3 py-3 rounded-lg "
                                            />
                                            
                                        </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            

                            <div className="flex items-center justify-center gap-3 text-[14px]">
                                <Link href="/login" className="w-40 text-sm font-semibold py-2 border text-white bg-black border-white/80 hover:border-white/60">
                                    Create Account
                                </Link>
                                
                            </div>

                            <div>
                                <p className='text-start text-[#676666] space-x-6 mt-4'>already have an account? <span className='text-[#7144F1] font-semibold'><Link href='/login'>Login</Link></span></p>
                                <p className='my-5 text-black/50 text-[15px]'><span className='w-50 h-1 bg-black'></span>or<span></span></p>
                                <div className=' flex text-black/80 font-medium  justify-between space-x-10 text-[15px] mb-4'>
                                    <button className="flex items-center justify-center gap-2 border-[1.5px] border-[#676666] rounded-2xl px-8 py-3">
                                        <FcGoogle className="text-xl" />
                                        Sign up with Google
                                    </button>

                                    <button className="flex items-center  justify-center gap-2 border-[1.5px] border-[#676666] rounded-2xl px-9 py-3">
                                        <SiFacebook className="text-xl text-blue-600" />
                                        Sign up with Facebook
                                    </button>

                                </div>
                            </div>

                        </form>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}
