import Dropdown from "@/components/ui/dropdown";
import React from "react";

const solutions=[]

const page = () => {
  return (
    <div>
      <div className="space-y-1">
        <h1 className="font-bold text-2xl text-[#020A1A]">Available Solutions</h1>
        <p className="text-sm text-[#020A1A]">
         Browse shortlisted solutions for your problems
        </p>
      </div>

      <div className="bg-[#09111E] rounded-lg px-6 py-8 flex  gap-6 mt-4 ">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search solutions, abstractions, or technologies"
          className="placeholder:text-white/85 outline-2 outline-gray-300 p-2 rounded-md text-xs text-white focus:outline-white w-lg"
        />
       
         <Dropdown
          options={[
            { label: "All status" },
            { label: "pending" },
            { label: "completed" },
          ]}
        />
      </div>

      {/* problems list */}
      <div className="bg-[#09111E] rounded-lg px-6 py-10 mt-4 h-full">
{solutions.length === 0 
?(
    <div className="flex flex-col justify-center items-center ">
        <p className="font-bold text-white text-lg">No solutions found</p>
        <p className=" text-white/70 text-sm">No solutions have been submitted yet</p>
    </div>
)
:(
<div>
    solutions
</div>
)
}
      </div>
    </div>
  );
};

export default page;
