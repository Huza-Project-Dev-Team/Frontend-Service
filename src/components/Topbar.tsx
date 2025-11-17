import React from "react";
import { BiBell, BiLogOut, BiUserCircle } from "react-icons/bi";
import { useUser } from "@/contexts/UserContext";
const Topbar = () => {
  const {user}=useUser();

  return (
    <div className="fixed top-0 right-0 h-16 flex justify-end items-center py-4 px-8 bg-[#09111E] z-10" style={{ width: 'calc(100% - 15rem)' }}>
      <div className="flex gap-6 items-center">
        <div className="hover:bg-[#1a2234] p-1 rounded-lg">
          <BiBell color="white" size={25} className="cursor-pointer" />
        </div>
        <div className="flex items-center gap-1 ">
          <BiUserCircle color="white" size={28} />
          <div className=" text-xs  flex flex-col leading-tight">
            <span className="text-white font-semibold">{user?.name || "Rukundo"}</span>
            <span className="text-gray-100">{user?.role} </span>
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
