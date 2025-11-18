"use client";

import Card from "@/components/ui/card";
import { CircleAlert, LineChart, Pencil, TicketCheck, Trash, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search, RotateCcw } from "lucide-react";
import { ReactNode, useState } from "react";
import { BiBulb } from "react-icons/bi";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ProblemDialog } from "@/components/ProblemDialog";

type CardProps = {
  icon: ReactNode;
  label: string;
  value: number;
  percentage: number;
};

const cards: CardProps[] = [
  { icon: <CircleAlert />, label: "Total problems", value: 0, percentage: 12 },
  { icon: <BiBulb size={24} />, label: "Active problems", value: 0, percentage: 12 },
  { icon: <TicketCheck />, label: "Closed problems", value: 0, percentage: 12 },
  { icon: <LineChart />, label: "Average submissions", value: 0, percentage: 12 },
];

const problems = [
  { title: 'Digital Farming Insights', organization: 'Rwanda Agriculture Board', sector: 'agriculture', date: '12-03-2026', availability: 'offline' as const },
  { title: 'Smart Transport Monitoring', organization: 'Ministry of Infrastructure', sector: 'transport', date: '08-11-2025', availability: 'online' as const },
  { title: 'E-Learning Support System', organization: 'Ministry of Education', sector: 'education', date: '19-07-2026', availability: 'hybrid' as const },
  { title: 'Digital Tax Collection System', organization: 'Rwanda Revenue Authority', sector: 'finance', date: '02-01-2026', availability: 'online' as const },
];

const ProblemsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState<{
    title: string;
    organization: string;
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
      <ProblemDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        problem={{
          title: "Smart Water Management System",
          sector: "Agriculture",
          organization: "Ministry of Environment",
          abstract: "An IoT-driven solution for monitoring water usage, detecting leaks, and optimizing distribution using real-time data analytics, low-cost sensors, and cloud integration. Tracks water flow across agricultural and household networks, regulating usage based on demand and environmental conditions, and provides dashboards for monitoring.",
          criteria: [
            "Increases recycling rates by at least 40%",
            "Reduces collection costs through optimization",
            "Provides real-time monitoring and analytics",
            "Engages citizens in proper waste disposal practices"
          ],
          attachments: [
            { name: "Technical_specifications.pdf" },
            { name: "Technical_specifications.pdf" },
            { name: "Smart waste bins", status: "Approved" },
            { name: "Smart waste bins", status: "Approved" }
          ]
        }} 
      />
    );
  };

  return (
    <div className="space-y-1">
      <div className="space-y-1">
        <h1 className="font-bold text-2xl text-white">Problems</h1>
        <p className="text-sm text-white">
          Manage your posted problems and view submissions
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
                <TableHead>Title</TableHead>
                <TableHead>Organization</TableHead>
                <TableHead>Sector</TableHead>
                <TableHead>Date</TableHead>
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
                  <TableCell className="py-3 px-4 text-white/80">{problem.organization}</TableCell>
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
      </div>
      <ProblemDetailsDialog />
    </div>
  );
};

export default ProblemsPage;