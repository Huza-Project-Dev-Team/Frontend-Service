'use client';

import Card, { cardProps } from "@/components/ui/card";
import { CircleAlert, LineChart, TicketCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BiBulb } from "react-icons/bi";
import ActivityGauge from "@/components/dashboard/GaugeChart";

const cards: cardProps[] = [
  { icon: <CircleAlert />, label: "Total problems", value: 0, percentage: 12 },
  { icon: <BiBulb size={24} />, label: "Solutions submitted", value: 0, percentage: 12 },
  { icon: <TicketCheck />, label: "Shortlisted", value: 0, percentage: 12 },
  { icon: <LineChart />, label: "Success rate", value: 0, percentage: 12 },
];

const activities = [
  { title: "New user registered", description: "A new user has registered on the platform.", time: "2 hours ago" },
  { title: "Problem Solved", description: "A problem has been successfully solved.", time: "1 day ago" },
  { title: "New Solution Submitted", description: "A new solution has been submitted for review.", time: "3 days ago" },
];

const users = [
  { profile: "/pp.png", name: "John Carter", email: "contact@sophiemoore.com", percentage: 60 },
  { profile: "/pp.png", name: "Sophie Moore", email: "contact@sophiemoore.com", percentage: 33 },
  { profile: "/pp.png", name: "Matt Cannon", email: "contact@sophiemoore.com", percentage: 75 },
];

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
    { name: "Health", value: 30, color: "#C026D3" },
    { name: "Education", value: 50, color: "#3B82F6" },
    { name: "Governance", value: 20, color: "#06B6D4" },
  ];
  const total = 150;
  const circumference = 2 * Math.PI * 70;
  let accumulated = 0;

  return (
    <div className="bg-[#0B1226] rounded-lg p-6 flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold text-white">Sector problems</h3>
        <button className="text-xs text-gray-400 border border-gray-700 rounded px-2 py-1 flex items-center gap-1">
          Export
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-center flex-1 relative">
        <svg width="180" height="180" viewBox="0 0 180 180" className="-rotate-90">
          <circle cx="90" cy="90" r="70" fill="none" stroke="#1F2937" strokeWidth="28" />
          {sectors.map((s, i) => {
            const start = accumulated;
            accumulated += s.value;
            const offset = circumference * (start / 100);
            const length = circumference * (s.value / 100);
            return (
              <circle
                key={i}
                cx="90"
                cy="90"
                r="70"
                fill="none"
                stroke={s.color}
                strokeWidth="28"
                strokeDasharray={`${length} ${circumference}`}
                strokeDashoffset={circumference - offset}
                className="transition-all duration-1000"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-3xl font-bold text-white">{total}K</p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {sectors.map((s) => (
          <div key={s.name} className="flex justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color }} />
              <span className="text-gray-300">{s.name}</span>
            </div>
            <span className="text-white font-medium">{s.value}%</span>
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
        <p className="text-xl font-bold text-white">Welcome to Huza admin</p>
        <p className="text-xs text-white/70">
          Manage the national innovation platform and connect organizations with innovations
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-[#0B1226] rounded-lg p-4 flex flex-col items-center">
          <h6 className="text-sm font-semibold text-white mb-6">Matching overview</h6>
          <span className="text-[#2956BC] text-lg">147</span>
          <p className="text-xs text-white mt-1">Problems matched this week</p>
          <div className="w-full h-2 bg-[#034BEE] rounded-full mt-3">
            <div className="h-full bg-[#08235F] rounded-full" style={{ width: "75%" }} />
          </div>
          <p className="text-[10px] text-white mt-2">75% match rate</p>
        </div>

        <div className="bg-[#0B1226] rounded-lg p-6">
          <h6 className="text-sm font-semibold text-white mb-4">Usage breakdown</h6>
          <div className="space-y-3">
            {["Total users", "Organizations", "Innovators"].map((label, i) => (
              <div key={i} className="flex justify-between items-center">
                <p className="text-xs text-white">{label}</p>
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-[#1048C5] to-[#08235F] text-xs text-white">
                  {[3, 2, 5][i]}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0B1226] rounded-lg p-6">
          <ActivityGauge />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#0B1226] rounded-lg">
          <div className="border-b border-white p-4">
            <h6 className="text-sm font-semibold text-white">Recent Activity</h6>
            <p className="text-xs text-white">Latest platform updates</p>
          </div>
          <div className="p-4 space-y-2">
            {activities.map((a, i) => (
              <div key={i} className="bg-[#020A1A] rounded-md p-3">
                <p className="text-white font-semibold text-sm">{a.title}</p>
                <p className="text-xs text-white">{a.description}</p>
                <p className="text-xs text-gray-400">{a.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0B1226] rounded-lg">
          <h6 className="p-4 text-sm font-semibold text-white border-b border-white">Project review</h6>
          <div className="p-6 space-y-6">
            {users.map((u, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Image src={u.profile} width={32} height={32} alt="" className="rounded-full" />
                  <div>
                    <p className="text-xs font-semibold text-white">{u.name}</p>
                    <p className="text-xs text-[#AEB9E1]">{u.email}</p>
                  </div>
                </div>
                <p className="text-xs font-semibold text-white">{u.percentage}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;