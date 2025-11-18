'use client';

import Card, { cardProps } from "@/components/ui/card";
import { CircleAlert, LineChart, TicketCheck } from "lucide-react";
import React from "react";
import { BiBulb } from "react-icons/bi";
import { Calendar } from "lucide-react";
import { Users } from "lucide-react";
import { Lightbulb, CheckCircle, FilePlus } from "lucide-react";


const cards: cardProps[] = [
  { icon: <CircleAlert />, label: "Total problems", value: 120, percentage: 28.4 },
  { icon: <BiBulb size={24} />, label: "Solutions submitted", value: 23.6, percentage: 28.4 },
  { icon: <TicketCheck />, label: "Shortlisted", value: 756, percentage: 3.1 },
  { icon: <LineChart />, label: "Success rate", value: 2.3, percentage: 11.3 },
];

const activities = [
  { icon: <Lightbulb size={16} color="blue" />, description: "Solution approved “Digital attendance system”", time: "2 hours ago" },
  { icon: <CheckCircle size={16} color="blue" />, description: "Solution approved “Digital attendance system”", time: "1 Week ago" },
  { icon: <FilePlus size={16} color="blue" />, description: "Solution approved “Digital attendance system”", time: "5 days ago" },
];

const users = [
  { name: "“Your solution has benn shortlisted”", email: "AI disease detection system",  },
  { name: "“Your solution has benn shortlisted”", email: "AI disease detection system", },
  { name: "“Your solution has benn shortlisted”", email: "AI disease detection system", },
];


const solutiondetails = [
  {title: "Agrisense",category: "Agriculture", shortdescr: "Posted by Ministry of Agriculture", longdescr: "Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers." , objective: [ "Reduce waste in agriculture by at least 30%","Improve crop yields through optimized irrigation"], submition: 125, date: "18 Feb",  },
  {title: "Agrisense",category: "Agriculture", shortdescr: "Posted by Ministry of Agriculture", longdescr: "Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers." , objective: [ "Reduce waste in agriculture by at least 30%","Improve crop yields through optimized irrigation"], submition: 125, date: "18 Feb",  },
  {title: "Agrisense",category: "Agriculture", shortdescr: "Posted by Ministry of Agriculture", longdescr: "Create an IoT-based water management solution to optimize irrigation, reduce water waste, and improve crop yields for smallholder farmers." , objective: [ "Reduce waste in agriculture by at least 30%","Improve crop yields through optimized irrigation"], submition: 125, date: "18 Feb",  }
]


const SolutionsBarChart = () => {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const values = [40,80,60,30,70,90,55,95,45,70,50,65];
  const max = Math.max(...values);
  const total = values.reduce((a,b)=>a+b,0);

  return (
    <div className="bg-[#0B1226] rounded-lg p-6 flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold text-white">Total solutions submitted</h3>
        <select className="bg-transparent text-xs text-gray-400 border border-gray-700 rounded px-2 py-1">
          <option>Jan 2024 - Dec 2024</option>
        </select>
      </div>

      <div className="flex-1 min-h-0">
        <svg viewBox="0 0 340 180" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
          {[100,80,60,40,20,0].map(v => (
            <g key={v}>
              <text x="10" y={180 - (v/100)*150 + 4} className="fill-gray-400 text-[10px]">{v}K</text>
              <line x1="30" y1={180 - (v/100)*150} x2="340" y2={180 - (v/100)*150}
                    stroke="#1F2937" strokeWidth="1"/>
            </g>
          ))}

          {values.map((val, i) => {
            const barHeight = (val / max) * 150;
            const darkH = barHeight * 0.6;
            const lightH = barHeight - darkH;
            const x = 45 + i * 24;

            return (
              <g key={i}>
                <rect
                  x={x + 9.5}
                  y={180 - darkH - lightH}
                  width="5"
                  height={darkH}
                  fill="#1E40AF"
                  rx="2.5"
                  ry="2.5"
                />
                <rect
                  x={x + 9.5}
                  y={180 - lightH}
                  width="5"
                  height={lightH}
                  fill="#3B82F6"
                  rx="2.5"
                  ry="2.5"
                />
                <text x={x + 12} y="195" className="fill-gray-400 text-[10px] text-center">
                  {months[i]}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 text-center">
        <p className="text-3xl font-bold text-white">{total.toFixed(1)}K</p>
        <p className="text-xs text-green-400">+14.8%</p>
      </div>
    </div>
  );
};

const SectorDonutChart = () => {
  const sectors = [
    { name: "Pending", value: 30, count: 30, color: "#C026D3" },
    { name: "Shortlisted", value: 50, count: 50, color: "#3B82F6" },
    { name: "Approved", value: 120, count: 120, color: "#06B6D4" },
  ];
  const total = 150;
  const totalValue = sectors.reduce((sum, s) => sum + s.value, 0);
  const circumference = 2 * Math.PI * 70;
  let accumulated = 0;

  return (
    <div className="bg-[#0B1226] rounded-lg p-6 flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white">Solutions</h3>
        <button className="text-xs text-gray-400 border border-gray-700 rounded px-3 py-1.5 flex items-center gap-1.5">
          Export
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-center flex-1 relative">
        <svg width="220" height="220" viewBox="0 0 220 220" className="-rotate-90">
          <circle cx="110" cy="110" r="85" fill="none" stroke="#1F2937" strokeWidth="20" />
          {sectors.map((s, i) => {
            const start = accumulated;
            const percentage = (s.value / totalValue) * 100;
            accumulated += percentage;
            const offset = circumference * (start / 100);
            const length = circumference * (percentage / 100);
            return (
              <circle
                key={i}
                cx="110"
                cy="110"
                r="85"
                fill="none"
                stroke={s.color}
                strokeWidth="20"
                strokeDasharray={`${length} ${circumference}`}
                strokeDashoffset={circumference - offset}
                className="transition-all duration-1000"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-4xl font-bold text-white">{total}k</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {sectors.map((s) => (
          <div key={s.name} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
              <span className="text-sm text-gray-300">{s.name}</span>
            </div>
            <span className="text-base text-white font-medium">{s.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


const Page = () => {
  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="rounded-md bg-[#09111E] p-6 space-y-1">
        <p className="text-xl font-bold text-white">Welcome Divin</p>
        <p className="text-xs text-white/70">
          Post the solutions for problems posted by organizations
        </p>
      </div>

      <div className="flex  gap-2 items-center ">
        {cards.map((c, i) => (
          <Card key={i} icon={c.icon} label={c.label} value={c.value} percentage={c.percentage} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SolutionsBarChart />
        <SectorDonutChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {solutiondetails.map((solution, id) => (
          <div key={id} className="bg-[#0B1226] p-6 rounded-2xl shadow-md text-white">
            <div className="flex items-start justify-between">
              <h2 className="text-3xl font-semibold">{solution.title}</h2>
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
              <p className="font-semibold text-gray-200 mb-1">Key Objectives:</p>
              <ul className="list-disc ml-5 text-gray-300 space-y-1 text-[13px]">
                {solution.objective.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            </div>

            <div className="my-6 border-t border-white/10" />
            <div className="flex items-center justify-between text-gray-400 text-sm">
              <div className="flex items-center gap-2 text-[13px]">
                <span><Users size={24} color="white" /></span>
                <span>{solution.submition} submissions</span>
              </div>

              <div className="flex items-center gap-2 text-[13px]">
                <span><Calendar size={24} color="white" /></span>
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


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#0B1226] rounded-lg">
          <div className="p-4">
            <h6 className="text-md font-semibold text-white">Recent Activity</h6>
            <p className="text-sm text-white mt-3">Latest platform updates</p>
          </div>
          <div className="p-4 space-y-2">
            {activities.map((a, i) => (
              <div key={i} className="flex flex-row rounded-md p-3 justify-self-start gap-6">
                <div className="w-10 h-10 bg-[#0B1739] p-2 rounded-3xl">
                  <span className="flex justify-center items-center">{a.icon}</span>
                </div>
                <div className="">
                  <p className="text-xs text-white">{a.description}</p>
                  <p className="text-xs text-gray-400">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0B1226] rounded-lg">
          <div className="flex items-center justify-between mx-20">
            <h6 className="p-4 text-sm font-semibold text-white ">Feedback review</h6>
            <p className="text-md font-semibold text-white">View All</p>
          </div>
          
          <div className="p-6 space-y-6">
            {users.map((u, i) => (
              <div key={i} className="flex justify-between items-center mx-6">
                <div>
                  <p className="text-lg font-semibold text-white">{u.name}</p>
                  <p className="text-sm text-[#AEB9E1] ml-4 mt-2">{u.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;