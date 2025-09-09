"use client";
import Dropdown from "@/components/ui/dropdown";
import React, { useState } from "react";
import Input from "@/components/ui/input";
import { X } from "lucide-react";
import InputField from "@/components/dashboard/inputField";

const Page = () => {
  const [technologies, setTechnologies] = useState<string[]>([""]);

  const handleChange = (index: number, value: string) => {
    const updated = [...technologies];
    updated[index] = value;
    setTechnologies(updated);
  };

  const addTechnology = () => {
    setTechnologies((prev) => [...prev, ""]);
  };

  const removeTechnology = (index: number) => {
    setTechnologies((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="space-y-1">
        <h1 className="font-bold text-2xl text-[#020A1A]">Submit Solution</h1>
        <p className="text-sm text-[#020A1A]">
          Propose your innovative solution to address posted challenge
        </p>
      </div>

      {/* select problem */}
      <div className="rounded-md w-full bg-[#09111E] mt-4">
        <div className="border-b border-gray-300 p-3">
          <p className="font-bold text-white">Select Problem</p>
        </div>
        <div className="space-y-2 p-4">
          <p className="text-sm text-white">Chose a problem to solve*</p>
          <Dropdown options={[{ label: "select problem" }]} />
        </div>
      </div>

      {/* solution details */}
      <div className="rounded-md w-full bg-[#09111E] mt-4">
        <div className="border-b border-gray-300 p-3">
          <p className="font-bold text-white">Solution Details</p>
        </div>

        <InputField
          title="Solution Title"
          input={
            <Input
              type="text"
              name="title"
              placeholder="Enter a clear title for your solution"
            />
          }
        />

        <InputField
          title="Abstract"
          input={
            <Input
              type="textarea"
              name="abstract"
              placeholder="Provide a concise abstract for your solution"
            />
          }
        />

        <InputField
          title="Methodology"
          input={
            <Input
              type="textarea"
              name="methodology"
              placeholder="Describe your approach, methods, and implementation strategy"
            />
          }
        />

        <InputField
          title="Expected Impact"
          input={
            <Input
              type="textarea"
              name="impact"
              placeholder="Explain the potential impact and benefits of your solution"
            />
          }
        />

        <InputField
          title="Funding Required (optional)"
          input={
            <Input
              type="text"
              name="funding"
              placeholder="e.g (1,000,000 Rwandan francs for development)"
            />
          }
        />

        <InputField
          title="Website URL (optional)"
          input={
            <Input
              type="text"
              name="website"
              placeholder="Add the link to where the solution can be accessed"
            />
          }
        />

        {/* technologies  */}
        <div className="p-4 space-y-3">
          <p className="text-sm text-white ml-2">Technologies Used*</p>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  type="text"
                  name={`tech-${index}`}
                  placeholder={`Technology ${index + 1}`}
                  value={tech}
                  onChange={(e: any) => handleChange(index, e.target.value)}
                />
                {technologies.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeTechnology(index)}
                    className="p-2 rounded-md bg-red-500/10 hover:bg-red-500/20 text-red-400 transition"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            onClick={addTechnology}
            type="button"
            className="flex items-center justify-center border border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-[#1a2234] transition"
          >
            + Add Technology
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="my-4 w-[12rem] h-10 text-center text-sm py-2 cursor-pointer text-white font-semibold bg-[#09111E] hover:bg-[#1a2234]">
          Submit Solution
        </button>
      </div>
    </div>
  );
};

export default Page;


