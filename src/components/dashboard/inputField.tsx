import React from 'react'

const InputField = ({
  title,
  input,
}: {
  title: string;
  input: React.ReactNode;
}) => {
  return (
    <div className="p-4 space-y-2">
      <p className="text-sm text-white ml-2">{title}*</p>
      {input}
    </div>
  );
};

export default InputField
