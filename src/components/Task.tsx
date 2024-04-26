import React from 'react'
import { FaTrashCan, FaPen } from "react-icons/fa6";


export const Task = () => {
    return (
        <div className='w-full bg-white h-24 rounded mt-5 flex justify-center items-center gap-4 px-5'>
            <input className='h-10 w-10 cursor-pointer' type="checkbox" name="" id="" />
            <div className=' w-4/5 text-gray-800'>
                <h4 className=' font-bold'>Wash dish</h4>
                <p>5:23 AM, 25/4/2024</p>
            </div>
            <button className='h-10 w-10 bg-gray-300 flex justify-center items-center rounded-md hover:bg-gray-200'><FaTrashCan /></button>
            <button className='h-10 w-10 bg-gray-300 flex justify-center items-center rounded-md hover:bg-gray-200'><FaPen /></button>
        </div>
    )
}
