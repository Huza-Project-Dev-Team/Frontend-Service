"use client";

import Card, { cardProps } from "@/components/ui/card";
import { CircleAlert, LineChart, Pencil, TicketCheck, Trash, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Loader, Rotate3D, File, FileText, Cpu } from "lucide-react";
import React, { useState } from "react";
import { BiBulb } from "react-icons/bi";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search,RotateCcw } from "lucide-react";

const problems = [
  {title:'Smart health management',submittedBy:'ministry of health',sector:'agriculture',date:'25-09-2025',availability:'online'},
{title:'Digital Farming Insights',submittedBy:'Emmanuel Byiringiro',sector:'agriculture',date:'12-03-2026',availability:'offline'},
{title:'Smart Transport Monitoring',submittedBy:'Alice Mukamana',sector:'transport',date:'08-11-2025',availability:'online'},
{title:'E-Learning Support System',submittedBy:'Jean Claude Nshimiyimana',sector:'education',date:'19-07-2026',availability:'hybrid'},
{title:'Digital Tax Collection System',submittedBy:'Grace Uwase',sector:'finance',date:'02-01-2026',availability:'online'},
{title:'Urban Waste Tracking',submittedBy:'Samuel Mugisha',sector:'environment',date:'14-06-2025',availability:'offline'},
{title:'Smart Water Quality Monitor',submittedBy:'Diane Uwera',sector:'water',date:'26-10-2025',availability:'online'},
{title:'Security Incident Analyzer',submittedBy:'Patrick Habimana',sector:'security',date:'03-12-2025',availability:'hybrid'},
{title:'Tourism Experience Optimizer',submittedBy:'Linda Ingabire',sector:'tourism',date:'17-08-2026',availability:'online'}

];

const cards: cardProps[] = [
  { icon: <CircleAlert />, label: "Total problems", value: 0, percentage: 12 },
  { icon: <BiBulb size={24} />, label: "Active problems", value: 0, percentage: 12 },
  { icon: <TicketCheck />, label: "Closed problems", value: 0, percentage: 12 },
  { icon: <LineChart />, label: "Average submissions", value: 0, percentage: 12 },
];

const ProblemsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState<{
    title: string;
    submittedBy: string;
    sector: string;
    date: string;
    availability: string;
  } | null>(null);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(problems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProblems = problems.slice(startIndex, startIndex + itemsPerPage);

  const PaginationControls = () => (
    <div className="flex items-center justify-between px-6 py-3 border-t border-[#2D3B5E] bg-[#0F172A]">
      <div className="text-sm text-gray-400">
        Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
        <span className="font-medium">
          {Math.min(currentPage * itemsPerPage, problems.length)}
        </span>{' '}
        of <span className="font-medium">{problems.length}</span> results
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          className="p-1.5 rounded-md border border-[#2D3B5E] hover:bg-[#1E293B] disabled:opacity-30"
        >
          <ChevronsLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="p-1.5 rounded-md border border-[#2D3B5E] hover:bg-[#1E293B] disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="px-3 py-1 text-sm text-gray-300 bg-[#1E293B] rounded-md">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="p-1.5 rounded-md border border-[#2D3B5E] hover:bg-[#1E293B] disabled:opacity-30"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        <button
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
          className="p-1.5 rounded-md border border-[#2D3B5E] hover:bg-[#1E293B] disabled:opacity-30"
        >
          <ChevronsRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );

const ProblemDetailsDialog = () => {
  if (!selectedProblem) return null;

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-[#09111E] text-white border-gray-700 w-[90vw]">
        <DialogHeader className="border-b border-gray-800 pb-4">
          <DialogTitle className="text-xl font-bold">{selectedProblem.title}</DialogTitle>
          <div className="flex items-center justify-between w-full">
            <span className="text-sm text-gray-400">Submitted by: {selectedProblem.submittedBy}</span>
            <span className="px-2.5 py-0.5 text-xs font-medium bg-green-800 text-green-400 rounded">
              {selectedProblem.sector}
            </span>
            
          </div>
        </DialogHeader>

        <div className="space-y-4 py-4 pr-2">
           <h3 className="font-semibold text-base mb-2 text-white flex items-center gap-2">
              <FileText className="h-4 w-4 text-blue-400" />
              Problem Addressed
            </h3>
          <section className="bg-[#0B1226] border border-[#AEB9E1] rounded px-4 py-2">
           
            <p className="text-gray-300 text-sm">Urban waste management crisis</p>
          </section>

          <section className="bg-[#0B1226] border border-[#AEB9E1] rounded-2xl p-4">
            <h3 className="font-semibold text-base mb-2 text-white flex items-center gap-2">
              <FileText className="h-4 w-4 text-blue-400" />
              Abstract/Overview
            </h3>
            <p className="text-gray-300 text-sm">
              The Smart Water Management System is an IoT-driven solution for monitoring water usage, 
              detecting leaks, and optimizing distribution using real-time data analytics, low-cost sensors, 
              and cloud integration. It tracks water flow across agricultural and household networks, 
              regulating usage based on demand and environmental conditions, and provides dashboards for 
              monitoring and AI models for predicting consumption patterns and identifying wastage points.
            </p>
          </section>

          <section className="bg-[#0B1226] border border-[#AEB9E1] rounded-2xl p-4">
            <h3 className="font-semibold text-base mb-2 text-white flex items-center gap-2">
              <Cpu className="h-4 w-4 text-blue-400" />
              Technologies used
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Java script', 'Raspberry pi', 'Cloud computing'].map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-xs border  text-white rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="bg-[#0B1226] border border-[#AEB9E1] rounded-2xl p-4">
            <h3 className="font-semibold text-base mb-2 text-white flex items-center gap-2">
              <File className="h-4 w-4 text-blue-400" />
              Attachments
            </h3>
            <div className="space-y-2">
              {[
                { name: 'Technical_specifications.pdf' },
                { name: 'Technical_specifications.pdf' }
              ].map((file, index) => (
                <div key={index} className="flex items-center p-2 bg-[#0B1226] border border-[#AEB9E1] rounded-xl text-sm">
                  <File className="h-4 w-4 mr-2" />
                  <span className="text-white text-xs">{file.name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

  return (
    <div className="space-y-1">
      <div className="space-y-1">
        <h1 className="font-bold text-2xl text-white">Solutions</h1>
        <p className="text-sm text-white">
          Manage  posted solutions and view submissions
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
        <div className="flex justify-between items-center mb-6">
        
          <div className="flex items-center space-x-4">
            <div className="relative ">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search problems..."
                className=" text-white pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <select className="bg-[#09111E] text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All</option>
                <option>My Problems</option>
              </select>
              <select className="bg-[#09111E] text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All</option>
                <option>Active</option>
                <option>Archived</option>
              </select>
            </div>
            <button className=" border  text-white px-4 py-2 rounded-lg flex items-center space-x-2">
             <RotateCcw />

            </button>
          </div>
        </div>

        {/* Problems Table */}
        <div className="mt-6 rounded-lg border border-[#2D3B5E] overflow-hidden">
          <Table className="text-xs">
            <TableHeader className="bg-[#0F172A]">
              <TableRow className="hover:bg-[#0F172A] text-white">
                <TableHead className="w-12 px-4">Select</TableHead>
                <TableHead>Solution Title</TableHead>
                <TableHead>Submitted by</TableHead>
                <TableHead>Sector</TableHead>
                <TableHead>Date Posted</TableHead>
                <TableHead className="text-right">Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedProblems.map((problem, index) => (
                <TableRow 
                  key={index} 
                  className={`
                    
                    ${index % 2 === 0 ? 'bg-[#0A1330]' : 'bg-transparent'}
                    hover:bg-[#1E293B]/80
                  `}
                >
                  <TableCell className="py-3 px-4 text-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded  bg-transparent checked:bg-blue-700 text-blue-500 focus:ring-blue-500"
                    />
                  </TableCell>
                  <TableCell className="py-3 px-4 text-white font-medium">{problem.title}</TableCell>
                  <TableCell className="py-3 px-4 text-white/80">{problem.submittedBy}</TableCell>
                  <TableCell className="py-3 px-4 text-white/80">{problem.sector}</TableCell>
                  <TableCell className="py-3 px-4 text-white/80">{problem.date}</TableCell>
                  <TableCell className="py-3 px-4 text-right">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${
                      problem.availability === 'online' 
                        ? 'bg-green-500/20 text-green-400' 
                        : problem.availability === 'offline'
                        ? 'bg-red-500/20 text-red-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {problem.availability.charAt(0).toUpperCase() + problem.availability.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell className="py-3 px-4 text-right">
                    <div className="flex justify-end space-x-3">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProblem(problem);
                          setDialogOpen(true);
                        }} 
                        className="text-blue-400 hover:text-blue-300 cursor-pointer"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button className="text-red-400 hover:text-red-300 cursor-pointer">
                        <Trash className="h-4 w-4" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <PaginationControls />
        </div>
        <ProblemDetailsDialog />
      </div>
    </div>
  );
};

export default ProblemsPage;