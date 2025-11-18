"use client";
import React from "react";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";
import { useUser } from "@/contexts/UserContext";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
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
    <div className="flex h-screen overflow-hidden bg-[#09111E]">
      <Sidebar role={userRole} />
      
      <div className="flex-1 flex flex-col overflow-hidden ml-60">
        <Topbar />
        <div className="flex-1 overflow-auto p-4 pt-20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
