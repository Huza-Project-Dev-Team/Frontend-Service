import Card, { cardProps } from '@/components/ui/card';
import Dropdown from '@/components/ui/dropdown';
import { CircleAlert, LineChart, TicketCheck, Users } from 'lucide-react';
import React from 'react'
import { BiBulb } from 'react-icons/bi';


const cards: cardProps[] = [
  { icon: <Users />, label: "Total users", value: 3},
  {icon: <BiBulb size={24} />,label: "Admins", value: 1},
  { icon: <TicketCheck />, label: "Organisations", value: 0},
  { icon: <LineChart />, label: "Innovators", value: 2},
];

const users = [
  {
    user: "alice",
    email: "alice@example.com",
    role: "Admin",
    type: "Technology",
    joined: "12/3/2024",
    contact: "+250 700123456",
  },
  {
    user: "ben",
    email: "ben.dev@example.com",
    role: "Moderator",
    type: "Finance",
    joined: "05/4/2024",
    contact: "+250 701987654",
  },
  {
    user: "charlie",
    email: "charlie@example.com",
    role: "Innovator",
    type: "Health",
    joined: "20/2/2024",
    contact: "+250 703456789",
  },
  {
    user: "diana",
    email: "diana@example.com",
    role: "Member",
    type: "Education",
    joined: "10/6/2024",
    contact: "+250 704654321",
  },
  {
    user: "edward",
    email: "edward@example.com",
    role: "Researcher",
    type: "Agriculture",
    joined: "01/1/2024",
    contact: "+250 705112233",
  },
];

const page = () => {
  return (
    <div>
       <div className="space-y-1">
        <h1 className="font-bold text-2xl text-[#020A1A]">Users Management</h1>
        <p className="text-sm text-[#020A1A]">
         Manage and monitor all platform users
        </p>
      </div>
      {/* cards */}
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

      {/* search */}
         <div className="bg-[#09111E] rounded-lg p-6  flex  gap-6 mt-4 ">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search users by name or email..."
          className="placeholder:text-white/85 outline-2 outline-gray-300 p-2 rounded-md text-xs text-white focus:outline-white w-lg"
        />
       
         <Dropdown
          options={[
            { label: "All Roles" },
            { label: "admin" },
            { label: "user" },
          ]}
        />
      </div>

      {/* table */}
      <div className="overflow-x-auto rounded-lg border border-gray-700 bg-[#0A0F1C] mt-4">
      <table className="min-w-full text-sm text-left text-gray-300">
        <thead className="uppercase bg-[#09111E] text-gray-400 border-b border-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">User</th>
            <th scope="col" className="px-6 py-3">Role</th>
            <th scope="col" className="px-6 py-3">Type</th>
            <th scope="col" className="px-6 py-3">Joined</th>
            <th scope="col" className="px-6 py-3">Contact</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr
              key={i}
              className=" hover:bg-[#1f2937] transition"
            >
              <td className="px-6 py-3">
                <div className="flex flex-col">
                  <span className="font-medium">{u.user}</span>
                  <span className="text-xs text-gray-400">{u.email}</span>
                </div>
              </td>
              <td className="px-6 py-4">{u.role}</td>
              <td className="px-6 py-4">{u.type}</td>
              <td className="px-6 py-4">{u.joined}</td>
              <td className="px-6 py-4">{u.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default page
