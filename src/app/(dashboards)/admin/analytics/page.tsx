import Card, { cardProps } from "@/components/ui/card";
import { CircleAlert, LineChart, TicketCheck } from "lucide-react";
import React from "react";
import { BiBulb } from "react-icons/bi";

const cards: cardProps[] = [
  { icon: <CircleAlert />, label: "Total problems", value: 0, percentage: 12 },
  {
    icon: <BiBulb size={24} />,
    label: "Solutions submitted",
    value: 0,
    percentage: 12,
  },
  { icon: <TicketCheck />, label: "Shortlisted", value: 0, percentage: 12 },
  { icon: <LineChart />, label: "Success rate", value: 0, percentage: 12 },
];

const Otherstatistics = [
  { label: "Total users", percentage: 50 },
  { label: "Organizations", percentage: 60 },
  { label: "Innovators", percentage: 40 },
  { label: "Active problems", percentage: 70 },
];

const Othercards = [
  { value: "0", label: "Active challenges", description: "Growing platform" },
  { value: "30%", label: "Success rate", description: "Room for growth" },
  { value: "20", label: "Total users", description: "Building community" },
];

const activities: any[] = [];

const page = () => {
  return (
    <div>
      {/* Page header */}
      <div className="space-y-1">
        <h1 className="font-bold text-2xl text-[#020A1A]">
          Analytics & Insights
        </h1>
        <p className="text-sm text-[#020A1A]">
          Track platform performance and user engagment metrics
        </p>
      </div>

      {/* Top cards */}
      <div className="flex justify-between items-center mt-4">
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

      {/* Statistics section */}
      <div className="flex justify-between gap-6 mt-4">
        {/* Platform statistics */}
        <div className="rounded-md bg-[#09111E] w-full ">
          <div className="border-b border-white p-4 space-y-1">
            <h6 className="font-semibold text-white text-sm">
              Platform statistics
            </h6>
            <p className="text-xs text-white">User and content breakdown</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between">
              <p className="text-white text-xs">Total users</p>
              <div className="size-7 flex justify-center items-center rounded-full text-white bg-gradient-to-r from-[#1048C5] to-[#08235F]">
                <span className="text-xs">3</span>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-white text-xs">Organizations</p>
              <div className="size-7 flex justify-center items-center rounded-full text-white bg-gradient-to-r from-[#1048C5] to-[#08235F]">
                <span className="text-xs">2</span>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-white text-xs">Innovators</p>
              <div className="size-7 flex justify-center items-center rounded-full text-white bg-gradient-to-r from-[#1048C5] to-[#08235F]">
                <span className="text-xs">5</span>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-white text-xs">Active problems</p>
              <div className="size-7 flex justify-center items-center rounded-full text-white bg-gradient-to-r from-[#1048C5] to-[#08235F]">
                <span className="text-xs">1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Other statistics with progress bars */}
        <div className="rounded-md bg-[#09111E] w-full ">
          <div className="border-b border-white p-4 space-y-1">
            <h6 className="font-semibold text-white text-sm">
              Other Platform statistics
            </h6>
            <p className="text-xs text-white">User and content breakdown</p>
          </div>
          <div className="p-6 space-y-4 w-full">
            {Otherstatistics.map((statistic, index) => (
              <div className="flex items-center gap-6  w-full" key={index}>
                <p className="text-xs text-white whitespace-nowrap">
                  {statistic.label}
                </p>
                <div className="h-1.5 w-full rounded-full bg-white">
                  <div
                    style={{ width: `${statistic.percentage}%` }}
                    className="bg-[#034BEE] h-1.5 rounded-full"
                  ></div>
                </div>
                <span className="text-xs text-white">{statistic.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent activities */}
      <div className="rounded-md bg-[#09111E] w-full mt-4">
        <div className="border-b border-white p-4 space-y-1">
          <h6 className="font-semibold text-white text-sm">
            Recent Platform activities
          </h6>
          <p className="text-xs text-white">Latest updates and submissions</p>
        </div>

        {activities.length === 0 ? (
          <div className="flex flex-col justify-center items-center py-4 ">
            <p className="font-bold text-white text-lg">No activities found</p>
            <p className=" text-white/70 text-sm">
              You have no activities yet
            </p>
          </div>
        ) : (
          <div>activities</div>
        )}
      </div>

      {/* Other cards */}
      <div className="rounded-md bg-[#09111E] w-full mt-4">
        <div className="border-b border-white p-4 space-y-1">
          <h6 className="font-semibold text-white text-sm">
            Other Platform statistics
          </h6>
          <p className="text-xs text-white">Extra engagement metrics</p>
        </div>
        <div className="p-6 flex justify-between gap-4">
          {Othercards.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 rounded-md bg-gradient-to-r from-[#020A1A] to-[#0A3180] p-4 w-full text-white shadow-md"
            >
              <p className="text-2xl font-bold text-[#004EFF]">{item.value}</p>
              <p className="text-sm font-semibold">{item.label}</p>
              <p className="text-xs text-[#1976D2]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
