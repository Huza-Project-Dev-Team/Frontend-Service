"use client";
import Card, { cardProps } from "@/components/ui/card";
import { CircleAlert, XCircle , TicketCheck , Plus} from "lucide-react";
import React from "react";
import { BiBulb } from "react-icons/bi";
import { Search, SlidersHorizontal  } from "lucide-react";
import { Calendar } from "lucide-react";
import { Users } from "lucide-react";



const cards: cardProps[] = [
  { icon: <CircleAlert />, label: "Total problems", value: 120, percentage: 28.4 },
  { icon: <BiBulb size={24} />, label: "ShortListed", value: 756, percentage: 28.4 },
  { icon: <TicketCheck />, label: "Approved", value: 23.6, percentage: 3.1 },
  { icon: <XCircle  />, label: "Rejected", value: 2.4, percentage: 11.3 },
];

const Solutions = () => {
  const solutiondetails = [
    {title: "Agrisense",category: "Approved", shortdescr: "Smart Irrigation System", submition: 125, date: "18 Feb",file: 1, comment: 1 },
    {title: "Agrisense",category: "Shortlisted", shortdescr: "Smart Irrigation System", submition: 125, date: "18 Feb",file: 1, comment: 1,  },
    {title: "Agrisense",category: "Rejected", shortdescr: "Smart Irrigation System", submition: 125, date: "18 Feb",file: 1, comment: 1 },
    {title: "Agrisense",category: "Approved", shortdescr: "Smart Irrigation System", submition: 125, date: "18 Feb",file: 1, comment: 1 },
    {title: "Agrisense",category: "Approved", shortdescr: "Smart Irrigation System", submition: 125, date: "18 Feb",file: 1, comment: 1 },
    {title: "Agrisense",category: "Approved", shortdescr: "Smart Irrigation System", submition: 125, date: "18 Feb",file: 1, comment: 1 },
    {title: "Agrisense",category: "Approved", shortdescr: "Smart Irrigation System", submition: 125, date: "18 Feb",file: 1, comment: 1 },
    {title: "Agrisense",category: "Approved", shortdescr: "Smart Irrigation System", submition: 125, date: "18 Feb",file: 1, comment: 1 },
    {title: "Agrisense",category: "Approved", shortdescr: "Smart Irrigation System", submition: 125, date: "18 Feb",file: 1, comment: 1 }
  ]


  return (
    <div className="space-y-1">
      <div className="space-y-1">
        <h1 className="font-bold text-2xl text-white">Solutions</h1>
        <p className="text-sm text-white">
          View and Track your solution submission
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
              <Plus className="h-5 w-5" />
              <span>Submit Solution</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 my-10">
            {solutiondetails.map((solution, id) => (
              <div key={id} className="bg-[#0B1226] p-6 rounded-2xl shadow-md text-white my-4">
                <div className="flex items-start justify-between">
                  <h2 className="text-xl font-semibold">{solution.title}</h2>
                  <span className={`px-4 py-2 rounded-md text-sm ${ solution.category === "Approved" ? "bg-green-900/30 text-green-300": solution.category === "Rejected"? "bg-red-900/30 text-red-300": solution.category === "Shortlisted"? "bg-white/20 text-white": "" }`}>
                    {solution.category}
                  </span>
                </div>
                <p className="text-gray-300 mt-10">
                  {solution.shortdescr}
                </p>

                <div className="flex items-center justify-self-start text-gray-400 text-sm my-2 gap-6">
                  <div className="flex items-center gap-2 text-[13px]">
                    <span><Users size={16} color="white" /></span>
                    <span>{solution.submition} submissions</span>
                  </div>
    
                  <div className="flex items-center gap-2 text-[13px]">
                    <span><Calendar size={16} color="white" /></span>
                    <span>{solution.date}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-selef-start text-gray-400 text-sm my-2 gap-10">
                  <div className="flex items-center gap-2 text-[13px]">
                    <span><Users size={16} color="white" /></span>
                    <span>{solution.file} submissions</span>
                  </div>
    
                  <div className="flex items-center gap-2 text-[13px]">
                    <span><Calendar size={16} color="white" /></span>
                    <span>{solution.comment}</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <button className="flex-1 border border-white/20 text-gray-200 py-3 rounded-lg hover:bg-white/10 transition text-[13px] cursor-pointer">
                    View details
                  </button>
    
                  <button className="flex-1 bg-[#061230] py-3 rounded-lg text-[13px] cursor-pointer">
                    Delete
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

export default Solutions;