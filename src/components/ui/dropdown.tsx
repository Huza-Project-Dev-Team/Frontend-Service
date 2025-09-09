"use client";
import clsx from "clsx";
import React from "react";

interface DropdownProps {
  name?: string;
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value?: string }[];
  styles?: string;
}

const Dropdown = ({
  name,
  id,
  value,
  onChange,
  options,
  styles,
}: DropdownProps) => {
  return (
    <div>
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className={clsx(
          "text-white bg-[#09111E] rounded-md p-2 text-sm ring-2 ring-gray-300  outline-none",
          styles 
        )}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value ?? option.label}
            className="text-gray-800 bg-white" // ⚡ browser only allows styling option minimally
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
