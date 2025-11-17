"use client";
import Card, { cardProps } from "@/components/ui/card";
import { CircleAlert, XCircle , TicketCheck , Plus, CalendarRange} from "lucide-react";
import React, { useState } from "react";
import { BiBulb } from "react-icons/bi";
import { Search, File, X } from "lucide-react";


const cards: cardProps[] = [
  { icon: <CircleAlert />, label: "Total problems", value: 120, percentage: 28.4 },
  { icon: <BiBulb size={24} />, label: "ShortListed", value: 756, percentage: 28.4 },
  { icon: <TicketCheck />, label: "Approved", value: 23.6, percentage: 3.1 },
  { icon: <XCircle  />, label: "Rejected", value: 2.4, percentage: 11.3 },
];


const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState<any | null>(null);
  const [file1, setFile1] = useState<File | null>(null);



  const solutiondetails = [
    {title: "Smart Waste System",category: "Approved", shortdescr: "Smart Irrigation System", submition: 125, date: "18 Feb",file: 3, comment: 1 },
    {title: "Smart Waste System",category: "Shortlisted", shortdescr: "Smart Irrigation System", submition: 125, date: "18 Feb",file: 3, comment: 1,  },
    {title: "Smart Waste System",category: "Rejected", shortdescr: "Smart Irrigation System", submition: 125, date: "18 Feb",file: 3, comment: 1 },
    {title: "Smart Waste System",category: "Approved", shortdescr: "Smart Irrigation System", submition: 125, date: "18 Feb",file: 3, comment: 1 },
    {title: "Smart Waste System",category: "Approved", shortdescr: "Smart Irrigation System", submition: 125, date: "18 Feb",file: 3, comment: 1 },
    {title: "Smart Waste System",category: "Approved", shortdescr: "Smart Irrigation System", submition: 125, date: "18 Feb",file: 3, comment: 1 },
    {title: "Smart Waste System",category: "Approved", shortdescr: "Smart Irrigation System", submition: 125, date: "18 Feb",file: 3, comment: 1 },
    {title: "Smart Waste System",category: "Approved", shortdescr: "Smart Irrigation System", submition: 125, date: "18 Feb",file: 3, comment: 1 },
    {title: "Smart Waste System",category: "Approved", shortdescr: "Smart Irrigation System", submition: 125, date: "18 Feb",file: 3, comment: 1 }
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
              <span>All status</span>
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

                <div className="flex flex-col justify-self-start text-gray-400 text-sm my-2 gap-4">
                  <div className="flex items-center gap-2 text-[13px]">
                    <span><CalendarRange size={16} color="white" /></span>
                    <span>{solution.date}, 2025</span>
                  </div>
    
                  <div className="flex items-center gap-2 text-[13px]">
                    <span><File size={16} color="white" /></span>
                    <span>{solution.file} Files</span>
                  </div>
                </div>
                
                <button className="block border border-white/20 my-2 text-gray-200 rounded-lg hover:bg-white/10 transition text-[13px] cursor-pointer px-10 py-3 mx-auto" onClick={() => setSelectedSolution(solution)}>
                  View details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedSolution && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xs"></div>
          <div className="relative w-auto h-auto bg-[#0B1226] p-6 shadow-xl overflow-y-auto animate-slideIn items-center justify-center rounded-3xl">
            <button className="text-white mb-6 flex flex-row gap-2 items-center justify-end font-semibold cursor-pointer" onClick={() => setSelectedSolution(null)}>
              <X size={20} /> Close
            </button>

            <div className="flex items-start justify-between">
              <h2 className="text-2xl font-semibold text-white">
                {selectedSolution.title}
              </h2>
              <span className={`px-4 py-2 rounded-md text-sm ${ selectedSolution.category === "Approved" ? "bg-green-900/30 text-green-300" : selectedSolution.category === "Rejected" ? "bg-red-900/30 text-red-300" : selectedSolution.category === "Shortlisted"? "bg-white/20 text-white": ""}`}>
                {selectedSolution.category}
              </span>
            </div>

            <p className="text-gray-300 mt-6">
              {selectedSolution.shortdescr}
            </p>

            <div className="flex items-center gap-2 text-gray-400 text-sm mt-6">
              <CalendarRange size={16} color="white" />
              <span>{selectedSolution.date}, 2025</span>
            </div>

            <div className="mt-6 space-x-4 text-white w-full">
                <input type="file" className="text-sm text-gray-300 border border-gray-600 rounded-md p-2 bg-[#0B1226] cursor-pointer" onChange={(e) => { if (e.target.files && e.target.files[0]) { setFile1(e.target.files[0]);}}}/>
                <input type="file" className="text-sm text-gray-300 border border-gray-600 rounded-md p-2 bg-[#0B1226] cursor-pointer" onChange={(e) => { if (e.target.files && e.target.files[0]) { setFile1(e.target.files[0]);}}} />
            </div>

            <div className="grid lg:grid-cols-2 gap-3 mt-8">
              <button className="flex-1 border border-white text-white/80 py-3 rounded-lg hover:bg-white/20">
                Approve
              </button>
              <button className="flex-1 border border-white text-white/80 py-3 rounded-lg hover:bg-white/20">
                Shortlist
              </button>
              <button className="flex-1 border border-white text-white/80 py-3 rounded-lg hover:bg-white/20">
                Reject
              </button>
              <button className="flex-1 border border-white text-white/80 py-3 rounded-lg hover:bg-white/20">
                Feedback
              </button>
            </div>
        </div>
      </div>
      )}
    </div>
  );
};


export default Solutions;