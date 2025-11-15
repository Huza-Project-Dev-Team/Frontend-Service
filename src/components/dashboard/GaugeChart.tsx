import React from 'react';

const ActivityGauge = () => {
  const activity = 80;
  const view = { w: 160, h: 90 };
  const cx = view.w / 2;
  const cy = view.h - 10;
  const r = 40;
  const sw = 8;

  const semiLength = Math.PI * r;
  const progressLength = semiLength * (activity / 100);
  const semiArc = `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`;

  const segments = [
    { name: 'Innovators', color: '#9f52d5', p: 30 },
    { name: 'Government', color: '#7b61ff', p: 25 },
    { name: 'Organisations', color: '#00d4ff', p: 45 },
  ];

  let accumulated = 0;
  const segPaths = segments.map(seg => {
    const start = accumulated;
    accumulated += seg.p;
    const a1 = (start / 100) * Math.PI;
    const a2 = (accumulated / 100) * Math.PI;
    const x1 = cx + r * Math.cos(a1);
    const y1 = cy + r * Math.sin(a1);
    const x2 = cx + r * Math.cos(a2);
    const y2 = cy + r * Math.sin(a2);
    return {
      d: `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`,
      color: seg.color,
      name: seg.name,
    };
  });

  return (
    <div className="flex flex-col items-center w-full h-full p-1">
      <div className="text-xs font-medium text-white mb-1">Platform users</div>
      <div className="relative w-full h-[80px]">
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${view.w} ${view.h}`}
          className="overflow-visible"
        >
          <path d={semiArc} fill="none" stroke="#222" strokeWidth={sw} strokeLinecap="round" />
          {segPaths.map((p, i) => (
            <path key={i} d={p.d} fill="none" stroke={p.color} strokeWidth={sw} strokeLinecap="round" />
          ))}
          <path
            d={semiArc}
            fill="none"
            stroke="#00ff9d"
            strokeWidth={sw}
            strokeLinecap="round"
            strokeDasharray={semiLength}
            strokeDashoffset={semiLength - progressLength}
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        <div className="absolute top- left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <div className="text-lg font-bold text-white">{activity}%</div>
          <div className="text-[8px] text-gray-400">Activity</div>
        </div>

        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex gap-2 text-[8px] w-full justify-center">
          {segments.map(s => (
            <div key={s.name} className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
              <span className="text-gray-300">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityGauge;