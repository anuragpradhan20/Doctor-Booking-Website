import React from 'react'
import Appointment from '../assets/assets_frontend/appointment_img.png'
const AccountBanner = () => {
  return (
    <div className='w-[990px] mx-auto mt-10 bg-blue-500 rounded-xl p-10 flex items-center justify-between'>
    <div className='w-3/5 flex flex-col'>
        <h1 className='text-4xl text-white font-medium py-6'>Book Appointment With 100+ Trusted Doctors</h1>
         <button className='w-2/6 bg-gray-200 px-3 py-3 rounded-full text-sm text-gray-800  font-medium'>Create Account</button>
        </div>
      <img src={Appointment} alt="banner.png" className='w-2/5'></img>
    </div>
  )
}

export default AccountBanner