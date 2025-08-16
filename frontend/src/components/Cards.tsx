import React from 'react'
import beliver from "../assets/beliver.jpg"
import { FaPlay } from "react-icons/fa";

const Cards = () => {
  return (
    <div className=' w-56 hover:bg-gray-800 h-[300px] group transition-all duration-300 ease-in hover:scale-95'>
        <div className='relative'>
        <img className='px-3 py-3  border-0 rounded-2xl' src={beliver} alt="" />
        
        <div className='absolute right-3 top-40 '>
        <FaPlay className='text-black bg-pink-500 h-10 w-10 border-0 rounded-full px-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity  ease-in'/>
        </div>
        </div>
        <div className='flex flex-col ml-3'>
            <h3 className='text-[15px] font-sans font-bold'>Hello jeevan whats app</h3>
            <p className='text-[13px] font-medium text-gray-500'>hello guys</p>
           
        </div>
        
    </div>
  )
}

export default Cards