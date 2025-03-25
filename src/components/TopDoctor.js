import React from 'react'
import { doctors } from '../assets/assets_frontend/assets'
import DoctorCard from './DoctorCard'
const TopDoctor = () => {
  return (
    <div className='w-[990px] mx-auto mt-10'>
    <h1  className='text-3xl font-medium text-center'>Top Doctors to Book</h1>
    <p className='text-sm text-gray-600 my-6 text-center'>Simply browse through our extensive list of trusted doctors.</p>
    <div className='flex gap-4 flex-wrap'>
      {
        doctors.map((doctor,index)=>(<DoctorCard key={index} id={doctor._id} name={doctor.name} image={doctor.image} speciality={doctor.speciality}/>))
      }
    </div>
    </div>
  )
}

export default TopDoctor