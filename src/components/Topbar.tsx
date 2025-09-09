import React from "react";
import Image from "next/image";
import { BiBell, BiLogOut, BiUser, BiUserCircle } from "react-icons/bi";
import { useUser } from "@/contexts/UserContext";
const Topbar = () => {
  const {user}=useUser()
  return (
    <div className="fixed  w-full flex justify-between items-center py-4 px-8 bg-[#020A1A]">
      {/* Logo */}
      <div className="text-white font-bold text-xl flex ">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <span>HUZA</span>
      </div>

      <div className="flex gap-6 items-center ">
        <div className="hover:bg-[#1a2234] p-1 rounded-lg">
          <BiBell color="white" size={25} className="cursor-pointer" />
        </div>
        <div className="flex items-center gap-1 ">
          <BiUserCircle color="white" size={28} />
          <div className=" text-xs  flex flex-col leading-tight">
            <span className="text-white font-semibold">{user?.name}</span>
            <span className="text-gray-100">{user?.role}</span>
          </div>
        </div>
        <div className="hover:bg-[#1a2234] p-1 rounded-lg">
          <BiLogOut color="white" size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
