"use client";
import  { cardProps } from "@/components/ui/card";
import { CircleAlert, XCircle , TicketCheck , Plus} from "lucide-react";
import React from "react";
import { BiBulb } from "react-icons/bi";
import { Search, SlidersHorizontal  } from "lucide-react";;
import { ArrowRight , Clock, MessageCircle} from "lucide-react";



const cards: cardProps[] = [
  { icon: <CircleAlert />, label: "Total problems", value: 120, percentage: 28.4 },
  { icon: <BiBulb size={24} />, label: "ShortListed", value: 756, percentage: 28.4 },
  { icon: <TicketCheck />, label: "Approved", value: 23.6, percentage: 3.1 },
  { icon: <XCircle  />, label: "Rejected", value: 2.4, percentage: 11.3 },
];

const Feedback = () => {
  const solutiondetails = [
    {title: "Agrisense",category: "Agriculture", shortdescr: "Problem: connecting buyers to farmers", longdescr:"“Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers”", submition: 125, date: "18 Feb",file: "2 Weeks ago", comment: 12},
    {title: "Agrisense",category: "Agriculture", shortdescr: "Problem: connecting buyers to farmers", longdescr:"“Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers”",submition: 125, date: "18 Feb",file: "2 Weeks ago", comment: 12,  },
    {title: "Agrisense",category: "Agriculture", shortdescr: "Problem: connecting buyers to farmers", longdescr:"“Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers”",submition: 125, date: "18 Feb",file: "2 Weeks ago", comment: 12},
    {title: "Agrisense",category: "Agriculture", shortdescr: "Problem: connecting buyers to farmers",longdescr:"“Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers”", submition: 125, date: "18 Feb",file: "2 Weeks ago", comment: 12},
    {title: "Agrisense",category: "Agriculture", shortdescr: "Problem: connecting buyers to farmers", longdescr:"“Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers”",submition: 125, date: "18 Feb",file: "2 Weeks ago", comment: 12},
    {title: "Agrisense",category: "Agriculture", shortdescr: "Problem: connecting buyers to farmers",longdescr:"“Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers”", submition: 125, date: "18 Feb",file: "2 Weeks ago", comment: 12},
    {title: "Agrisense",category: "Agriculture", shortdescr: "Problem: connecting buyers to farmers", longdescr:"“Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers”",submition: 125, date: "18 Feb",file: "2 Weeks ago", comment: 12},
    {title: "Agrisense",category: "Agriculture", shortdescr: "Problem: connecting buyers to farmers", longdescr:"“Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers”",submition: 125, date: "18 Feb",file: "2 Weeks ago", comment: 12},
    {title: "Agrisense",category: "Agriculture", shortdescr: "Problem: connecting buyers to farmers", longdescr:"“Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers”",submition: 125, date: "18 Feb",file: "2 Weeks ago", comment: 12}
  ]


  return (
    <div className="space-y-1">
      <div className="space-y-1">
        <h1 className="font-bold text-2xl text-white">Feedback & Reviews</h1>
        <p className="text-sm text-white">
          Track progress, read and reviewer comments, and refine your innovations
        </p>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 my-10">
            {solutiondetails.map((solution, id) => (
              <div key={id} className="bg-[#0B1226] p-6 rounded-2xl shadow-md text-white my-4">
                <div className="flex items-start justify-between">
                  <h2 className="text-xl font-semibold">{solution.title}</h2>
                </div>
                <p className="text-gray-300 mt-10">
                  {solution.shortdescr}
                </p>

                <div className="my-5">
                  <span className={`px-4 py-2 rounded-md text-xs bg-green-900/30 text-green-300 `}>
                    {solution.category}
                  </span>
                </div>

                <p className="bg-[#09111E] mx-auto text-sm rounded-lg p-2 px-4">
                  {solution.longdescr}
                </p>

                <div className="flex items-center justify-between text-gray-400 text-sm my-5 gap-10">
                  <div className="flex items-center gap-2 text-[13px]">
                    <span><Clock size={16} color="white" /></span>
                    <span>{solution.file}</span>
                  </div>
    
                  <div className="flex items-center gap-2 text-[13px]">
                    <span><MessageCircle size={16} color="white" /></span>
                    <span>{solution.comment}</span>
                  </div>

                  <span className="flex flex-row gap-2 items-center justify-center"><p className="text-md text-white" >View full Feedbacks</p><ArrowRight size={16} color="white" /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;