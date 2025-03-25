import React from 'react'
import header from '../assets/assets_frontend/header_img.png'
import GroupProfile from '../assets/assets_frontend/group_profiles.png'
import { IoIosArrowRoundForward } from "react-icons/io";
const Banner = () => {
  return (
    <div className='w-[990px] mx-auto mt-10 bg-blue-500 rounded-xl p-10 flex items-center justify-between'>
        <div className='w-1/2 flex flex-col'>
        <h1 className='text-4xl text-white font-medium py-4'>Book Appointment With Trusted Doctors.</h1>
         <div className='flex items-center gap-2 py-4'>
            <img src={GroupProfile} alt="GroupProfile.png" />
            <p className='text-sm text-gray-200'>Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.</p>
         </div>
         <button className='w-2/5 bg-gray-200 px-3 py-2 rounded-full text-sm text-gray-800 flex gap-2 items-center font-medium'>Book appointment <IoIosArrowRoundForward size={20}/></button>
        </div>
      <img src={header} alt="banner.png" className='w-1/2'></img>
    </div>
  )
}

export default Banner