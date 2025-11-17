"use client";

import Card, { cardProps } from "@/components/ui/card";
import { CircleAlert, XCircle, TicketCheck  } from "lucide-react";
import React, { useState } from "react";
import { BiBulb } from "react-icons/bi";
import { Search, SlidersHorizontal  } from "lucide-react";
import { Calendar } from "lucide-react";
import { Users } from "lucide-react";



const cards: cardProps[] = [
  { icon: <CircleAlert />, label: "Total problems", value: 120, percentage: 28.4 },
  { icon: <BiBulb size={24} />, label: "ShortListed", value: 756, percentage: 28.4 },
  { icon: <TicketCheck />, label: "Approved", value: 23.6, percentage: 3.1 },
  { icon: <XCircle />, label: "Rejected", value: 2.4, percentage: 11.3 },
];

const ProblemsPage = () => {
  const solutiondetails = [
    {title: "Agrisense",category: "Approved", shortdescr: "Posted by Ministry of Agriculture", longdescr: "Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers." , objective: [ "Reduce waste in agriculture by at least 30%","Improve crop yields through optimized irrigation"], submition: 125, date: "18 Feb",  },
    {title: "Agrisense",category: "Shortlisted", shortdescr: "Posted by Ministry of Agriculture", longdescr: "Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers." , objective: [ "Reduce waste in agriculture by at least 30%","Improve crop yields through optimized irrigation"], submition: 125, date: "18 Feb",  },
    {title: "Agrisense",category: "Rejected", shortdescr: "Posted by Ministry of Agriculture", longdescr: "Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers." , objective: [ "Reduce waste in agriculture by at least 30%","Improve crop yields through optimized irrigation"], submition: 125, date: "18 Feb",  },
    {title: "Agrisense",category: "Approved", shortdescr: "Posted by Ministry of Agriculture", longdescr: "Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers." , objective: [ "Reduce waste in agriculture by at least 30%","Improve crop yields through optimized irrigation"], submition: 125, date: "18 Feb",  },
    {title: "Agrisense",category: "Approved", shortdescr: "Posted by Ministry of Agriculture", longdescr: "Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers." , objective: [ "Reduce waste in agriculture by at least 30%","Improve crop yields through optimized irrigation"], submition: 125, date: "18 Feb",  },
    {title: "Agrisense",category: "Approved", shortdescr: "Posted by Ministry of Agriculture", longdescr: "Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers." , objective: [ "Reduce waste in agriculture by at least 30%","Improve crop yields through optimized irrigation"], submition: 125, date: "18 Feb",  },
    {title: "Agrisense",category: "Approved", shortdescr: "Posted by Ministry of Agriculture", longdescr: "Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers." , objective: [ "Reduce waste in agriculture by at least 30%","Improve crop yields through optimized irrigation"], submition: 125, date: "18 Feb",  },
    {title: "Agrisense",category: "Approved", shortdescr: "Posted by Ministry of Agriculture", longdescr: "Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers." , objective: [ "Reduce waste in agriculture by at least 30%","Improve crop yields through optimized irrigation"], submition: 125, date: "18 Feb",  },
    {title: "Agrisense",category: "Approved", shortdescr: "Posted by Ministry of Agriculture", longdescr: "Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers." , objective: [ "Reduce waste in agriculture by at least 30%","Improve crop yields through optimized irrigation"], submition: 125, date: "18 Feb",  }
  ]


  return (
    <div className="space-y-1">
      <div className="space-y-1">
        <h1 className="font-bold text-2xl text-white">Explore Problems</h1>
        <p className="text-sm text-white">
          Discover problems posted by organizations and ministries
        </p>
      </div>

      <div className="flex justify-between gap-2 items-center my-8">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            label={card.label}
            value={card.value}
            percentage={card.percentage}
          />
        ))}
      </div>

      <div className="p-6">
        <div className="my-6">
          <div className="flex items-center space-x-4">
            <div className="relative ">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title or objective . . ."
                className="w-100 text-white pl-10 pr-4 py-5 text-sm rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-5 rounded-lg border border-gray-700 text-white hover:bg-gray-800 transition cursor-pointer">
              <SlidersHorizontal className="h-5 w-5" />
              <span>Hide Filters</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 my-10">
            {solutiondetails.map((solution, id) => (
              <div key={id} className="bg-[#0B1226] p-6 rounded-2xl shadow-md text-white my-4">
                <div className="flex items-start justify-between">
                  <h2 className="text-xl font-semibold">{solution.title}</h2>
                  <span className="bg-green-900/30 text-green-300 px-4 py-2 rounded-md text-sm">
                    {solution.category}
                  </span>
                </div>
                <p className="text-gray-300 mt-10">
                  {solution.shortdescr}
                </p>
                <p className="mt-4 text-gray-400 leading-relaxed text-[13px]">
                  {solution.longdescr}
                </p>
    
                <div className="mt-4">
                  <p className="text-gray-200 mb-1 text-sm">Key Objectives:</p>
                  <ul className="list-disc ml-5 text-gray-300 space-y-1 text-[13px]">
                    {solution.objective.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                </div>
    
                <div className="my-6 border-t border-white/10" />
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <div className="flex items-center gap-2 text-[13px]">
                    <span><Users size={16} color="white" /></span>
                    <span>{solution.submition} submissions</span>
                  </div>
    
                  <div className="flex items-center gap-2 text-[13px]">
                    <span><Calendar size={16} color="white" /></span>
                    <span>{solution.date}</span>
                  </div>
                </div>
    
                <div className="flex gap-4 mt-6">
                  <button className="flex-1 border border-white/20 text-gray-200 py-3 rounded-lg hover:bg-white/10 transition text-[13px] cursor-pointer">
                    View details
                  </button>
    
                  <button className="flex-1 bg-[#061230] py-3 rounded-lg text-[13px] cursor-pointer">
                    Submit solution
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsPage;