import Dropdown from '@/components/ui/dropdown'
import React from 'react'

const problems=[]
const page = () => {
  return (
    <div>
         <div className="space-y-1">
        <h1 className="font-bold text-2xl text-[#020A1A]">My Problems</h1>
        <p className="text-sm text-[#020A1A]">
         Manage your posted problems and view submissions
        </p>
      </div>

      <div className="bg-[#09111E] rounded-lg px-6 py-8 flex  gap-6 mt-4 ">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search problems, descrptions, or tags"
          className="placeholder:text-white/85 outline-2 outline-gray-300 p-2 rounded-md text-xs text-white focus:outline-white w-lg"
        />
        <Dropdown
          options={[
            { label: "All categories" },
            { label: "Special need" },
            { label: "less important" },
          ]}
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
{problems.length === 0 
?(
    <div className="flex flex-col justify-center items-center ">
        <p className="font-bold text-white text-lg">No problmes found</p>
        <p className=" text-white/70 text-sm">There are no problems posted yet</p>
    </div>
)
:(
<div>
    problems
</div>
)
}
      </div>
    </div>
  )
}

export default page
