"use client";

import React, { useState } from "react";
import { CircleAlert, XCircle, TicketCheck, Search, SlidersHorizontal, Calendar, Users, X } from "lucide-react";
import { BiBulb, BiImage, BiDownload } from "react-icons/bi";
import Card from "@/components/ui/card";

interface CardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  percentage: number;
}

interface Solution {
  title: string;
  category: string;
  shortdescr: string;
  longdescr: string;
  objective: string[];
  submition: number;
  date: string;
}


const cards: CardProps[] = [
  { icon: <CircleAlert />, label: "Total problems", value: 120, percentage: 28.4 },
  { icon: <BiBulb size={24} />, label: "ShortListed", value: 756, percentage: 28.4 },
  { icon: <TicketCheck />, label: "Approved", value: 23.6, percentage: 3.1 },
  { icon: <XCircle />, label: "Rejected", value: 2.4, percentage: 11.3 },
];

interface SubmitSolutionProps {
  onClose: () => void;
}

const SubmitSolution: React.FC<SubmitSolutionProps> = ({ onClose }) => {
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
            <h2 className="text-white text-2xl font-bold">Submit Solution</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white cursor-pointer">
              <X size={24} />
            </button>
          </div>
        
        <div className="p-6">
          <p className="text-gray-400 mb-6">Share an innovative and life changing solution</p>
          
          <div className="space-y-6">
            <div>
              <label className="block text-white mb-2">Choose a problem to solve*</label>
              <select className="w-full bg-[#0A0F1F] text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Agriculture</option>
                <option>Health</option>
                <option>Education</option>
                <option>Climate Change</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Solution Title*</label>
              <input
                type="text"
                placeholder="Enter a clear title of your solution"
                className="w-full bg-[#0A0F1F] text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="bg-[#0A0F1F] p-8 rounded-xl border border-gray-700">
              <h3 className="text-gray-300 text-lg mb-6 flex items-center gap-2">
                <span className="text-xl"><BiDownload size={20} /></span>
                Upload your file
              </h3>

              <label className="flex flex-col items-center justify-center h-64 border-2 border-gray-600 border-dashed rounded-xl cursor-pointer hover:border-purple-500 transition">
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
            
            <div>
              <label className=" items-center gap-4 text-white mb-2 text-2xl font-semibold flex flex-row pb-4"><BiBulb size={40} />Submission Guidelines</label>
              <ul className="list-disc text-white/80 mx-10 space-y-4">
                <li>Use a simple and a clear language</li>
                <li>Ensure that abstract is under 500 words</li>
                <li>Make sure that your document is detailed enough</li>
                <li>Be specific about your methodology and expected outcomes</li>
              </ul>
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

const ProblemsPage: React.FC = () => {
  const [showSubmitForm, setShowSubmitForm] = useState<boolean>(false);
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  const solutiondetails: Solution[] = [
    {
      title: "Agrisense",
      category: "Approved",
      shortdescr: "Posted by Ministry of Agriculture",
      longdescr: "Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers.",
      objective: ["Reduce waste in agriculture by at least 30%", "Improve crop yields through optimized irrigation"],
      submition: 125,
      date: "18 Feb",
    },
    {
      title: "HealthTech Initiative",
      category: "Shortlisted",
      shortdescr: "Posted by Ministry of Health",
      longdescr: "Develop a telemedicine platform to provide remote healthcare services to rural communities.",
      objective: ["Increase healthcare access by 40%", "Reduce patient travel time"],
      submition: 89,
      date: "20 Feb",
    },
    {
      title: "EduConnect",
      category: "Rejected",
      shortdescr: "Posted by Ministry of Education",
      longdescr: "Create a digital learning platform to bridge the education gap in underserved areas.",
      objective: ["Improve literacy rates", "Provide free educational resources"],
      submition: 45,
      date: "15 Feb",
    },
    {
      title: "CleanEnergy",
      category: "Approved",
      shortdescr: "Posted by Environmental Agency",
      longdescr: "Design renewable energy solutions for off-grid communities.",
      objective: ["Reduce carbon emissions by 25%", "Provide sustainable power"],
      submition: 156,
      date: "22 Feb",
    },
    {
      title: "Agrisense",
      category: "Approved",
      shortdescr: "Posted by Ministry of Agriculture",
      longdescr: "Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers.",
      objective: ["Reduce waste in agriculture by at least 30%", "Improve crop yields through optimized irrigation"],
      submition: 125,
      date: "18 Feb",
    },
    {
      title: "HealthTech Initiative",
      category: "Shortlisted",
      shortdescr: "Posted by Ministry of Health",
      longdescr: "Develop a telemedicine platform to provide remote healthcare services to rural communities.",
      objective: ["Increase healthcare access by 40%", "Reduce patient travel time"],
      submition: 89,
      date: "20 Feb",
    },
    {
      title: "EduConnect",
      category: "Rejected",
      shortdescr: "Posted by Ministry of Education",
      longdescr: "Create a digital learning platform to bridge the education gap in underserved areas.",
      objective: ["Improve literacy rates", "Provide free educational resources"],
      submition: 45,
      date: "15 Feb",
    },
    {
      title: "CleanEnergy",
      category: "Approved",
      shortdescr: "Posted by Environmental Agency",
      longdescr: "Design renewable energy solutions for off-grid communities.",
      objective: ["Reduce carbon emissions by 25%", "Provide sustainable power"],
      submition: 156,
      date: "22 Feb",
    },
    {
      title: "EduConnect",
      category: "Rejected",
      shortdescr: "Posted by Ministry of Education",
      longdescr: "Create a digital learning platform to bridge the education gap in underserved areas.",
      objective: ["Improve literacy rates", "Provide free educational resources"],
      submition: 45,
      date: "15 Feb",
    },
  ];

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case "Approved":
        return "bg-green-900/30 text-green-300";
      case "Shortlisted":
        return "bg-yellow-900/30 text-yellow-300";
      case "Rejected":
        return "bg-red-900/30 text-red-300";
      default:
        return "bg-gray-900/30 text-gray-300";
    }
  };

  const handleSubmitSolution = (solution: Solution): void => {
    setSelectedSolution(solution);
    setShowSubmitForm(true);
  };

  if (showSubmitForm) {
    return <SubmitSolution onClose={() => setShowSubmitForm(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#050A1A] p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="font-bold text-3xl text-white">Explore Problems</h1>
          <p className="text-sm text-gray-400">
            Discover problems posted by organizations and ministries
          </p>
        </div>

        <div className="flex  gap-2 items-center ">
          {cards.map((c, i) => (
            <Card key={i} icon={c.icon} label={c.label} value={c.value} percentage={c.percentage} />
          ))}
        </div>

        <div className="my-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative flex-1 min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title or objective . . ."
                className="w-full bg-[#0B1226] text-white pl-10 pr-4 py-3 text-sm rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button className="flex items-center space-x-2 px-6 py-3 rounded-lg border border-gray-700 text-white hover:bg-gray-800 transition">
              <SlidersHorizontal className="h-5 w-5" />
              <span>Hide Filters</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {solutiondetails.map((solution, id) => (
              <div key={id} className="bg-[#0B1226] p-6 rounded-2xl shadow-lg text-white border border-gray-800 hover:border-gray-700 transition">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-xl font-semibold">{solution.title}</h2>
                  <span className={`${getCategoryColor(solution.category)} px-3 py-1 rounded-md text-sm font-medium`}>
                    {solution.category}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-4">{solution.shortdescr}</p>

                <p className="text-gray-300 leading-relaxed text-sm mb-4">
                  {solution.longdescr}
                </p>

                <div className="mb-4">
                  <p className="text-gray-200 mb-2 text-sm font-medium">Key Objectives:</p>
                  <ul className="list-disc ml-5 text-gray-400 space-y-1 text-sm">
                    {solution.objective.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                </div>

                <div className="my-4 border-t border-gray-800" />

                <div className="flex items-center justify-between text-gray-400 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{solution.submition} submissions</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{solution.date}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 border border-gray-700 text-gray-200 py-2.5 rounded-lg hover:bg-gray-800 transition text-sm font-medium cursor-pointer">
                    View details
                  </button>

                  <button
                    onClick={() => handleSubmitSolution(solution)}
                    className="flex-1 bg-[#02144f] text-white py-2.5 rounded-lg transition text-sm font-medium cursor-pointer"
                  >
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