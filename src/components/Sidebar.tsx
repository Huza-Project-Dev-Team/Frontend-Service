"use client";
import { CircleSlash, HouseIcon, User, User2, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { BiBulb } from "react-icons/bi";
import { PiUserSoundBold, PiGraphBold } from "react-icons/pi";
import { BiSearch, BiMessage , BiLogoXing} from "react-icons/bi";
import Image from "next/image";

interface LinkProps {
  label: string;
  href: string;
  icon: React.ReactNode;
}
export interface SidebarProps {
  role: "admin" | "innovator" | "organization";
}

const links: Record<SidebarProps["role"], LinkProps[]> = {
  admin: [
    { label: "Dashboard", href: "/admin/dashboard", icon: <HouseIcon /> },
    { label: "Users", href: "/admin/users", icon: <Users /> },
    { label: "Problems", href: "/admin/problems", icon: <CircleSlash /> },
    { label: "Solutions", href: "/admin/solutions", icon: <BiBulb size={20} /> },
    { label: "Analytics", href: "/admin/analytics", icon: <PiGraphBold /> },
    { label: "Profile", href: "/admin/profile", icon: <User /> },
  ],
  innovator: [
    { label: "Dashboard", href: "/innovator/dashboard", icon: <HouseIcon /> },
    { label: "Problems", href: "/innovator/problems", icon: <CircleSlash /> },
    { label: "Solutions", href: "/innovator/solutions", icon: <BiBulb size={20} /> },
    { label: "Feedback", href: "/innovator/feedback", icon: <BiMessage /> },
    { label: "Profile", href: "/innovator/profile", icon: <User2 /> },
  ],
  organization: [
    { label: "Dashboard", href: "/organization/dashboard", icon: <HouseIcon /> },
    { label: "Problems", href: "/organization/problems", icon: <BiLogoXing size={20} /> },
    { label: "Solutions", href: "/organization/solutions", icon: <BiBulb size={20} /> },
    { label: "Analytics", href: "/organization/analytics", icon: <PiGraphBold /> },
    { label: "Profile", href: "/organization/profile", icon: <PiUserSoundBold /> },
  ],
};

const Sidebar = ({ role }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 px-4 py-4 flex flex-col gap-3 bg-[#09111E] h-screen w-[15rem] overflow-y-auto">
      <div className="space-y-4 px-2">
        <div className="text-white font-bold text-xl flex items-center gap-2 my-4 ml-1">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <span>HUZA</span>
        </div>
        
        <div className="relative my-10">
          <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={12} />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full pl-10 pr-2 py-2 bg-[#0F172A] border border-gray-700 rounded-lg text-xs text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
        </div>
      </div>
      
      {links[role].map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className={clsx(
            "flex items-center gap-2 rounded-md px-3 py-3 text-white font-medium transition-colors",
            pathname === link.href
              ? "bg-blue-950/20 rounded-lg border-r-2 border-white text-white"
              : "hover:bg-[#1a2234] hover:text-gray-200"
          )}
        >
          {link.icon}
          <span>{link.label}</span>
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
