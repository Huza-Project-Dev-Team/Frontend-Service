"use client";
import { CircleSlash, HouseIcon, User, User2, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { BiBulb } from "react-icons/bi";
import { GrGraphQl } from "react-icons/gr";
import { PiGradientBold, PiGraphBold } from "react-icons/pi";
import { CgBulb } from "react-icons/cg";

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
    { label: "Browse Problems", href: "/innovator/browse-problems", icon: <CircleSlash /> },
    { label: "My Solutions", href: "/innovator/my-solutions", icon: <BiBulb size={20} /> },
    { label: "Submit Solution", href: "/innovator/submit-solution", icon: <CgBulb /> },
    { label: "Profile", href: "/innovator/profile", icon: <User2 /> },
  ],
  organization: [
    { label: "Dashboard", href: "/organization/dashboard", icon: <HouseIcon /> },
    { label: "My Problems", href: "/organization/my-problems", icon: <GrGraphQl size={20} /> },
    { label: "Solutions", href: "/organization/solutions", icon: <BiBulb size={20} /> },
    { label: "Post Problem", href: "/organization/post-problem", icon: <CircleSlash /> },
    { label: "Browse Projects", href: "/organization/browse-projects", icon: <PiGradientBold /> },
    { label: "Analytics", href: "/organization/analytics", icon: <PiGraphBold /> },
  ],
};

const Sidebar = ({ role }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside className="fixed mt-[4rem] px-4 pt-6 flex flex-col gap-3 bg-[#09111E] h-screen w-[15rem]">
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
