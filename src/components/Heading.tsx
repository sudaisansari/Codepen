import React from 'react'

interface Props {
  heading?: string;
  icon?: string;
  bgColor?: string;
}

const Heading: React.FC<Props> = ({ heading, icon, bgColor }) => {
  return (
    <div className='font-[500] ml-3 py-2 flex gap-x-2'>
      <div className={`${bgColor} text-[20px] text-black rounded-lg px-[10px] font-[500]`}>{icon}</div>
      <div className='text-[20px] text-gray-300'>{heading}</div>
    </div>
  )
}

export default Heading