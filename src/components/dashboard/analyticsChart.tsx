"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Mon", value: 30 },
  { name: "Tue", value: 30 },
  { name: "Wed", value: 30 },
  { name: "Thur", value: 40 },
  { name: "Fri", value: 25 },
  { name: "Sat", value: 30 },
  { name: "Sun", value: 10 },
];

export default function AnalyticsChart() {
  return (
    <div className="w-full h-48 bg-[#0A0F1C] pt-2 rounded-lg">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>

          <XAxis
            dataKey="name"
            stroke="#aaa"
            interval={0}
            angle={-30}
            tick={{
              dy: 10,
              fill: "#fff",
              fontWeight: "bold",
              fontSize: 12,
            }}
          />
          <YAxis
            stroke="#aaa"
            ticks={[10, 20, 30]}
            domain={[10, 30]}
            tick={{ fill: "#fff", fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#111", border: "none" }}
            labelStyle={{ color: "#fff" }}
            itemStyle={{ color: "#3b82f6" }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
