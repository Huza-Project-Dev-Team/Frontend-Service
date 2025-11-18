import { ArrowUp } from 'lucide-react'
import React from 'react'
import { BiDotsHorizontal } from 'react-icons/bi'

export interface cardProps{
    icon?:React.ReactNode,
    label:string,
    value:number,
    percentage?:number
}
const Card = ({icon,label,value,percentage}:cardProps) => {
  return (
    <div className='space-y-4 py-6 px-4 border-1 border-gray-900 rounded-lg bg-[#0B1226]  w-[15rem]'>
      <div className='flex justify-between items-center text-[#AEB9E1]'>
        <div className='flex items-center gap-2 text-sm '>
          {icon}
          <p className='text-xs'>{label}</p>
        </div>
       <button className='cursor-pointer p-1 hover:bg-gray-700 rounded-lg'>
        <BiDotsHorizontal/>
       </button>
      </div>
      <div className='flex items-center gap-3'>
        <span className='text-2xl text-white font-semibold'>{value}K</span>
        <span className='flex items-center rounded bg-[#05C168]/50 font-semibold py- px-2 text-[#14CA74] text-xs '>{
        percentage}%
        <ArrowUp size={14}/>
        
        </span>
      </div>
    </div>
  )
}

export default Card
