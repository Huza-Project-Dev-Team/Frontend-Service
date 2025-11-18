import React from "react";

interface InputProps {
  name?: string;
  placeholder?: string;
  type?: "text" | "password" | "email" | "textarea"|"date"; 
  value?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input = ({ name, placeholder, type = "text", value, onChange }: InputProps) => {
  if (type === "textarea") {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-[#1a2234] text-white/80 text-sm rounded-lg w-full px-2 py-3 border border-gray-600 placeholder-gray-400 h-40 resize-none"
      />
    );
  }

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-[#1a2234] text-white/80 text-sm rounded-lg w-full px-2 py-3 border border-gray-600 placeholder-gray-400"
    />
  );
};

export default Input;
