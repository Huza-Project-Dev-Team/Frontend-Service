"use client";

import Card, { cardProps } from "@/components/ui/card";
import { CircleAlert, XCircle, TicketCheck  } from "lucide-react";
import React, {useState} from "react";
import { BiBulb, BiImage, BiDownload } from "react-icons/bi";
import { Search,  Plus } from "lucide-react";
import { Calendar } from "lucide-react";
import { Users, X } from "lucide-react";



const cards: cardProps[] = [
  { icon: <CircleAlert />, label: "Total problems", value: 120, percentage: 28.4 },
  { icon: <BiBulb size={24} />, label: "ShortListed", value: 756, percentage: 28.4 },
  { icon: <TicketCheck />, label: "Approved", value: 23.6, percentage: 3.1 },
  { icon: <XCircle />, label: "Rejected", value: 2.4, percentage: 11.3 },
];

interface NewProblemProps {
  onClose: () => void;
}

const NewProblem: React.FC<NewProblemProps> = ({ onClose }) => {
  const [fileName, setFileName] = useState<string>("");

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  return (
    <div className="min-h-screen bg-[#050A1A] p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#0B1226] rounded-xl border border-gray-700">
          <div className="p-6 border-b border-gray-700 flex items-center justify-between">
            <h2 className="text-white text-2xl font-bold">Post New Problem</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white cursor-pointer">
              <X size={24} />
            </button>
          </div>
        
        <div className="p-6">
          <p className="text-gray-400 mb-6">Share a problem and connect with innovative solutions</p>
          
          <div className="space-y-6">
            <div>
              <label className="block text-white mb-2">Choose a problem to solve*</label>
              <select className="w-full bg-[#0A0F1F] text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0A0F1F]">
                <option>Agriculture</option>
                <option>Health</option>
                <option>Education</option>
                <option>Climate Change</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Sector / Category*</label>
              <select className="w-full bg-[#0A0F1F] text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0A0F1F]">
                <option>Agriculture</option>
                <option>Health</option>
                <option>Education</option>
                <option>Climate Change</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Problem Description*</label>
              <input
                type="text"
                placeholder="Enter a problem description"
                className="w-full bg-[#0A0F1F] text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0A0F1F]"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Evaluation Criteria*</label>
              <input
                type="text"
                placeholder="This is what we will consider(e,g innovation etc...)"
                className="w-full bg-[#0A0F1F] text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0A0F1F]"
              />
            </div>
            <div className="bg-[#0A0F1F] p-8 rounded-xl border border-gray-700">
              <h3 className="text-gray-300/60 text-lg mb-6 flex items-center gap-2"><span className="text-xl"><BiDownload size={20} /></span>Supporting documents* (optional)</h3>
              <label className="flex flex-col items-center justify-center h-64 border-2 border-gray-600 border-dashed rounded-xl cursor-pointer hover:border-[#0A0F1F] transition">
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFile}
                  accept=".ppt,.pptx,.pdf,.jpg,.jpeg,.png,.doc,.docx"
                />

                <div className="flex flex-col items-center">
                  <div className="text-[#122973] text-4xl mb-3 bg-[#122973]/50 w-20 h-20 flex items-center justify-center rounded-full"><BiImage size={40} /></div>
                  <p className="text-[#0A0F1F] text-base">Click to upload</p>
                  <p className="text-gray-400 text-sm mt-1">or drag and drop or browse files</p>
                  <p className="text-gray-500 text-xs mt-2">PPT, PDF, JPG or .docx (max. 800 × 400px)</p>
                </div>
              </label>

              {fileName && (
                <p className="text-green-400 mt-4 text-center">
                  Selected: <span className="text-white">{fileName}</span>
                </p>
              )}
            </div>
            
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 border border-gray-700 text-white py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer"
              >
                Save as Draft
              </button>
              <button
                type="button"
                className="flex-1 bg-[#122973] text-white py-3 rounded-lg hover:bg-[#0f1a3e] transition cursor-pointer"
              >
                Submit Solution
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

const ProblemsPage = () => {
  const [showModal, setShowModal] = useState(false);

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

  if (showModal) {
    return <NewProblem onClose={() => setShowModal(false)} />;
  }

  return (
    <div className="space-y-1">
      <div className="space-y-1">
        <h1 className="font-bold text-2xl text-white">Welcome RBC</h1>
        <p className="text-sm text-white">
          Post problems and filter problems based on sector
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
            <button className="flex items-center space-x-2 px-4 py-5 rounded-lg border border-gray-700 text-white hover:bg-gray-800 transition cursor-pointer " onClick={() => setShowModal(true)}>
              <Plus className="h-5 w-5" />
              <span>Add Problem</span>
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