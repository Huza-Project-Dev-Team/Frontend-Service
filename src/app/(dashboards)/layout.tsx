"use client";
import React from "react";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";
import { useUser } from "@/contexts/UserContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useUser();
  

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }
 
  const userRole = user?.role || "admin";
  
  return (
    <div>
      <Topbar />
      
      <div className="flex">
        <Sidebar role={userRole} />
        <div className="pt-20 pb-10 px-2 flex-1 ml-[15rem]">{children}</div>
      </div>
    </div>
  );
};

export default layout;
