import AnalyticsChart from "@/components/dashboard/analyticsChart";
import Card, { cardProps } from "@/components/ui/card";
import { CircleAlert, LineChart, TicketCheck } from "lucide-react";
import React from "react";
import { BiBulb } from "react-icons/bi";

const cards: cardProps[] = [
  { icon: <CircleAlert />, label: "Total problems", value: 0, percentage: 12 },
  {icon: <BiBulb size={24} />,label: "Solutions submitted", value: 0, percentage: 12},
  { icon: <TicketCheck />, label: "Shortlisted", value: 0, percentage: 12 },
  { icon: <LineChart />, label: "Success rate", value: 0, percentage: 12 },
];

const activities = [
  {
    title: "New user registered",
    description: "A new user has registered on the platform.",
    time: "2 hours ago",
  },
  {
    title: "Problem Solved",
    description: "A problem has been successfully solved.",
    time: "1 day ago",
  },
  {
    title: "New Solution Submitted",
    description: "A new solution has been submitted for review.",
    time: "3 days ago",
  },
];
const page = () => {
  return (
    <div className=" flex-col ">
      <div className="rounded-md px-6 py-10 bg-[#09111E] space-y-2 w-full">
        <p className="font-bold text-xl text-white">Welcome to Huza admin</p>
        <p className="text-xs text-white/70">
          Manage the national innovation platform and connect organizations with
          innoavtions
        </p>
      </div>

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
      {/* recent activity */}
      <div className="flex  justify-between p-2 gap-4 mt-4">
        <div className="rounded-md bg-[#09111E] w-full">
          <div className="border-b border-white p-4 space-y-1">
            <h6 className="font-semibold text-white text-sm">
              Recent Activity
            </h6>
            <p className="text-xs text-white">Latest platform updates</p>
          </div>
          {activities.length === 0 ? (
            <p className="text-white text-lg p-4 flex justify-center items-center">
              No recent activity
            </p>
          ) : (
            <div className="space-y-2 p-4">
              {activities.map((activity, index) => (
                <div key={index} className="p-2 bg-[#020A1A] rounded-md">
                  <p className="text-white font-semibold">{activity.title}</p>
                  <p className="text-xs text-white">{activity.description}</p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* statstics */}
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
      </div>

      <div className="flex justify-between gap-4 mt-4">
        {/* matching overview */}
        <div className="rounded-md bg-[#09111E] w-full flex-col p-4 items-center">
          <h6 className="font-semibold text-sm text-white text-center">
            Matching overview
          </h6>
          <div className=" flex flex-col items-center justify-center pt-10 gap-3">
            <span className="text-[#2956BC] text-lg">147</span>
            <p className="text-xs text-white">Problems matched this week</p>
            <div className="h-2 w-full rounded-full bg-[#034BEE]">
              <div
                style={{ width: "75%" }}
                className="bg-[#08235F] h-2 rounded-full"
              ></div>
            </div>

            <p className="text-white text-[10px]">75% match rate</p>
          </div>
        </div>
        {/* engagement highlights*/}
        <div className="rounded-md bg-[#09111E] w-full p-4">
          <h6 className="font-semibold text-sm text-white text-center">
            Engagement highlights
          </h6>
          <div className="border-b border-white space-y-2 px-2 py-6 ">
            <div className="flex justify-between  ">
              <p className="text-white text-xs">Active innovators</p>
              <span className="text-white font-semibold text-sm">3</span>
            </div>
            <div className="flex justify-between ">
              <p className="text-white text-xs">Active organizations</p>
              <span className="text-white font-semibold text-sm">1</span>
            </div>
          </div>
          <div className="px-2 py-2">
            <p className="text-white text-xs">+18% from this week</p>
          </div>
        </div>

        {/* analytics */}
        <div className="rounded-md bg-[#09111E] w-full flex-col p-4 items-center">
          <h6 className="font-semibold text-sm text-white text-center">
            Analytics snapshot
          </h6>
          <AnalyticsChart />
        </div>
      </div>
    </div>
  );
};

export default page;
