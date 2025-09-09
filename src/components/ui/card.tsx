import React from 'react'

export interface cardProps{
    icon?:React.ReactNode,
    label:string,
    value:number,
    percentage?:number
}
const Card = ({icon,label,value,percentage}:cardProps) => {
  return (
    <div className='py-6 px-2 rounded-md bg-[#09111E] flex gap-2 w-[15rem]'>
      <div className='rounded-md py-2 px-1 h-15 w-12 text-white flex justify-center items-center bg-gradient-to-tr from-[#020A1A] to-[#0A3180]'>
        {icon}
      </div>
      <div className='flex-col gap-1'>
        <p className='font-semibold text-white text-sm'>{label}</p>
        <div className='flex items-center gap-2'>
            <span className='text-2xl text-white'>{value}</span>
            {percentage &&(
                <span className='text-xs text-[#034BEE]'>+{percentage}%</span>
            )}
        </div>
      </div>
    </div>
  )
}

export default Card
