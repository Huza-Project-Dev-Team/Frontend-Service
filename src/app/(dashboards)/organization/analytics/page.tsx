'use client';

import Card, { cardProps } from "@/components/ui/card";
import { CircleAlert, XCircle, TicketCheck } from "lucide-react";
import React from "react";
import { BiBulb } from "react-icons/bi";

const cards: cardProps[] = [
  { icon: <CircleAlert />, label: "Total problems", value: 120, percentage: 28.4 },
  { icon: <BiBulb size={24} />, label: "ShortListed", value: 756, percentage: 28.4 },
  { icon: <TicketCheck />, label: "Approved", value: 23.6, percentage: 3.1 },
  { icon: <XCircle />, label: "Rejected", value: 2.4, percentage: 11.3 },
];

const SolutionsBarChart = () => {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const values = [40,80,60,30,70,90,55,95,45,70,50,65];
  const max = Math.max(...values);
  const total = 240.8;

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
                <rect x={x + 9.5} y={180 - darkH - lightH} width="5" height={darkH} fill="#1E40AF" rx="2.5" ry="2.5"/>
                <rect x={x + 9.5} y={180 - lightH} width="5" height={lightH} fill="#3B82F6" rx="2.5" ry="2.5"/>
                <text x={x + 12} y="195" className="fill-gray-400 text-[10px] text-center">{months[i]}</text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 text-center">
        <p className="text-3xl font-bold text-white">{total}K</p>
        <p className="text-xs text-green-400">+14.8%</p>
      </div>
    </div>
  );
};

const SectorDonutChart = () => {
  const sectors = [
    { name: "Health", value: 30, color: "#C026D3" },
    { name: "Governance", value: 50, color: "#3B82F6" },
    { name: "Direct", value: 20, color: "#06B6D4" },
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

const SubmissionsLineChart = () => {
  const dates = ["Jan 1", "Jan 8", "Jan 16", "Jan 24", "Jan 31", "Feb 1"];
  const values = [50, 120, 180, 320, 280, 257];
  const max = 500;
  const points = values.map((v, i) => `${60 + i * 45},${180 - (v / max) * 160}`).join(" ");

  return (
    <div className="bg-[#0B1226] rounded-lg p-6 flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold text-white flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400" />
          Submissions over time
        </h3>
        <select className="bg-transparent text-xs text-gray-400 border border-gray-700 rounded px-2 py-1">
          <option>Jan 2024</option>
        </select>
      </div>

      <div className="flex-1 min-h-0">
        <svg viewBox="0 0 340 180" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
          {[500,250,100,0].map(v => (
            <g key={v}>
              <text x="10" y={180 - (v/500)*160 + 4} className="fill-gray-400 text-[10px]">{v}</text>
              <line x1="40" y1={180 - (v/500)*160} x2="340" y2={180 - (v/500)*160}
                    stroke="#1F2937" strokeWidth="1"/>
            </g>
          ))}

          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path d={`M 60,180 L ${points} L 285,180 Z`} fill="url(#areaGradient)" />
          <polyline points={`60,180 ${points} 285,180`} fill="none" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

          {dates.map((d, i) => (
            <text key={i} x={60 + i * 45} y="195" className="fill-gray-400 text-[10px] text-center">{d}</text>
          ))}
        </svg>
      </div>

      <div className="mt-4 text-center">
        <p className="text-3xl font-bold text-white">257</p>
        <p className="text-xs text-green-400">+16.8%</p>
      </div>
    </div>
  );
};

const PlatformUsersGauge = () => {
  const percent = 80;
  const radius = 70;
  const stroke = 20;
  const circumference = Math.PI * radius;
  const offset = circumference - (circumference * percent / 100);

  const segments = [
    { name: "Innovators", color: "#C026D3", percent: 30 },
    { name: "Government", color: "#3B82F6", percent: 45 },
    { name: "Organisations", color: "#06B6D4", percent: 25 },
  ];

  let acc = 0;
  const paths = segments.map(s => {
    const start = acc;
    acc += s.percent;
    const a1 = (start / 100) * Math.PI;
    const a2 = (acc / 100) * Math.PI;
    const x1 = 90 + radius * Math.cos(a1);
    const y1 = 90 + radius * Math.sin(a1);
    const x2 = 90 + radius * Math.cos(a2);
    const y2 = 90 + radius * Math.sin(a2);
    return { d: `M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`, color: s.color, name: s.name };
  });

  return (
    <div className="bg-[#0B1226] rounded-lg p-6 flex flex-col h-full">
      <h3 className="text-sm font-semibold text-white mb-4">Platform users</h3>

      <div className="flex items-center justify-center flex-1">
        <svg width="180" height="100" viewBox="0 0 180 100" className="overflow-visible">
          <path d={`M ${90-radius} 90 A ${radius} ${radius} 0 0 1 ${90+radius} 90`} fill="none" stroke="#1F2937" strokeWidth={stroke} />
          {paths.map((p, i) => (
            <path key={i} d={p.d} fill="none" stroke={p.color} strokeWidth={stroke} strokeLinecap="round" />
          ))}
          <path
            d={`M ${90-radius} 90 A ${radius} ${radius} 0 0 1 ${90+radius} 90`}
            fill="none"
            stroke="#00D4FF"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000"
          />
        </svg>
      </div>

      <div className="text-center -translate-y-24">
        <p className="text-3xl font-bold text-white">{percent}%</p>
        <p className="text-xs text-gray-400">Transactions</p>
      </div>

      <div className="mt-4 flex justify-center gap-4 text-xs">
        {segments.map(s => (
          <div key={s.name} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
            <span className="text-gray-300">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-1">
        <h1 className="font-bold text-2xl text-white">Analytics</h1>
        <p className="text-sm text-white">Track platform performance and user engagement metrics</p>
      </div>

      <div className="flex justify-between gap-2 items-center my-8">
        {cards.map((card, i) => (
          <Card key={i} icon={card.icon} label={card.label} value={card.value} percentage={card.percentage} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SolutionsBarChart />
        <SectorDonutChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SubmissionsLineChart />
        <PlatformUsersGauge />
      </div>
    </div>
  );
};

export default Page;