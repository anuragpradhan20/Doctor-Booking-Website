import React from 'react'
import { Link } from 'react-router-dom'
import { GoDotFill } from "react-icons/go";
const DoctorCard = ({id,name,image,speciality}) => {
  return (
    <Link to={`/appointement/${id}`}>
    <div className='w-[220px] h-[350px] border border-gray-300 rounded-lg mb-4 cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in-out animate-move-up'>
        <img src={image} alt="doc1.png" className='bg-blue-100 rounded-tl-lg rounded-tr-lg'></img>
        <div className='flex flex-col gap-2 mx-4 my-2'>
        <p className='text-green-700 text-sm font-medium flex items-center gap-1'><GoDotFill />Available</p>
        <h1 className='text-lg font-medium'>{name}</h1>
        <p className='text-base font-medium text-gray-500'>{speciality}</p>
        </div>
    </div>
    </Link>
  )
}

export default DoctorCard