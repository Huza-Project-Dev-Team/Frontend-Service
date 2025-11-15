'use client';

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 10 },
  { name: 'Feb', value: 20 },
  { name: 'Mar', value: 15 },
  { name: 'Apr', value: 25 },
  { name: 'May', value: 20 },
  { name: 'Jun', value: 30 },
];

export const LineBarChart = ({ type = 'line', title }: { type: 'line' | 'bar', title: string }) => {
  const ChartComponent = type === 'line' ? LineChart : BarChart;
  const DataComponent = type === 'line' ? Line : Bar;
  
  return (
    <div className="bg-[#0B1226] rounded-md p-4 h-64 w-full">
      <h3 className="text-white text-sm font-medium mb-4">{title}</h3>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <ChartComponent
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: -20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94A3B8', fontSize: 12 }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94A3B8', fontSize: 12 }} 
              width={30}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#0F172A', 
                border: '1px solid #1E293B',
                borderRadius: '0.375rem',
                fontSize: '12px'
              }}
            />
            <DataComponent 
              type="monotone" 
              dataKey="value" 
              stroke="#3B82F6" 
              fill="#3B82F6" 
              strokeWidth={2}
              fillOpacity={type === 'bar' ? 1 : 0.3}
            />
          </ChartComponent>
        </ResponsiveContainer>
      </div>
    </div>
  );
};