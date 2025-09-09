"use client";
import InputField from "@/components/dashboard/inputField";
import Dropdown from "@/components/ui/dropdown";
import Input from "@/components/ui/input";
import { X } from "lucide-react";
import React, { useState } from "react";


const DynamicInputList = ({
  title,
  placeholder,
  values,
  setValues,
  name,
  onchange
}: {
  title: string;
  placeholder: string;
  values: string[];
  setValues: React.Dispatch<React.SetStateAction<string[]>>;
  name: string;
  
}) => {
  const handleChange = (index: number, value: string) => {
    const updated = [...values];
    updated[index] = value;
    setValues(updated);
  };

  const addItem = () => {
    setValues((prev) => [...prev, ""]);
  };

  const removeItem = (index: number) => {
    setValues((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 space-y-3">
      <p className="text-sm text-white ml-2">{title}*</p>
      <div className="flex flex-wrap gap-3">
        {values.map((val, index) => (
          <div key={index} className="flex items-center gap-2">
            <Input
              type="text"
              name={`${name}-${index}`}
              placeholder={`${placeholder} ${index + 1}`}
              value={val}
              onChange={(e) =>
                handleChange(index, e.target.value)
              }
            />
            {values.length > 1 && (
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="p-2 rounded-md bg-red-500/10 hover:bg-red-500/20 text-red-400 transition"
              >
                <X size={16} />
              </button>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={addItem}
        type="button"
        className="flex items-center justify-center border border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-[#1a2234] transition"
      >
        + Add {title.toLowerCase()}
      </button>
    </div>
  );
};

const Page = () => {
  const [evaluations, setEvaluations] = useState<string[]>([""]);
  const [tags, setTags] = useState<string[]>([""]);

  return (
    <div>
      <div className="space-y-1">
        <h1 className="font-bold text-2xl text-[#020A1A]">Post New Problem</h1>
        <p className="text-sm text-[#020A1A]">
          Share a challenge that needs innovative solutions from our community
        </p>
      </div>

      {/* Problem details */}
      <div className="rounded-md w-full bg-[#09111E] mt-4">
        <div className="border-b border-gray-300 p-3">
          <p className="font-bold text-white">Problem Details</p>
        </div>

        <InputField
          title="Problem Title"
          input={
            <Input
              type="text"
              name="title"
              placeholder="Enter a clear descriptive title for your problem"
            />
          }
        />

                <div className="grid grid-cols-2 w-full">
          <InputField
            title="Budget (optional)"
            input={
              <Dropdown
              styles="ring ring-gray-300"
              options={[
                {label:'Select a category'}
              ]}
              />
            }
          />
          <InputField
            title="Deadline"
            input={
              <Input
                type="date"
                name="contact"
                placeholder="Enter your contact"
              />
            }
          />
        </div>

        <InputField
          title="Problem description"
          input={
            <Input
              type="textarea"
              name="description"
              placeholder="Provide a detailed description of the problem"
            />
          }
        />

        <InputField
          title="Objectives"
          input={
            <Input
              type="textarea"
              name="objectives"
              placeholder="What are the main objectives or goals to achieve?"
            />
          }
        />

        <InputField
          title="Expected Outcomes"
          input={
            <Input
              type="textarea"
              name="outcomes"
              placeholder="Describe the expected results or outcomes"
            />
          }
        />
       
        <DynamicInputList
          title="Evaluation criteria"
          placeholder="Evaluation criteria"
          values={evaluations}
          setValues={setEvaluations}
          name="evaluation"
        />
        <DynamicInputList
          title="Tags"
          placeholder="Tag"
          values={tags}
          setValues={setTags}
          name="tag"
        />

        <div className="grid grid-cols-2 w-full">
          <InputField
            title="Budget (optional)"
            input={
              <Input
                type="text"
                name="budget"
                placeholder="eg., 500,000 - 1,000,000"
              />
            }
          />
          <InputField
            title="Contact information"
            input={
              <Input
                type="text"
                name="contact"
                placeholder="Enter your contact"
              />
            }
          />
        </div>

      </div>
      <div className="flex justify-end">
        <button className="my-4 w-[12rem] h-10 text-center text-sm py-2 cursor-pointer text-white font-semibold bg-[#09111E] hover:bg-[#1a2234]">
          Post Problem
        </button>
      </div>
    </div>
  );
};

export default Page;
