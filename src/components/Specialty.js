import React from 'react'
import {specialityData} from '../assets/assets_frontend/assets'
import General_physician from '../assets/assets_frontend/General_physician.svg'
import Gyencologist from '../assets/assets_frontend/Gynecologist.svg'
import Dermatologist from '../assets/assets_frontend/Dermatologist.svg'
import Pediatrician from '../assets/assets_frontend/Pediatricians.svg'
import Neurologist from '../assets/assets_frontend/Neurologist.svg'
import Gastroenterlogist from '../assets/assets_frontend/Gastroenterologist.svg'
import { Link } from 'react-router-dom'
const Specialty = () => {
  const specialityImage=[General_physician,Gyencologist,Dermatologist,Pediatrician,Neurologist,Gastroenterlogist];
  return (
    <div className='w-[990px] mx-auto mt-10 mb-32'>
    <h1 className='text-3xl font-medium text-center'>Find by Speciality</h1>
    <p className='text-sm text-gray-600 my-4 text-center '>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
    <div className='flex justify-between mt-8'>
      {specialityImage.map((name, index) => (
    <Link to={`/doctors/${specialityData[index]?.speciality}`} key={index} className='flex flex-col items-center gap-2 hover:-translate-y-2 transition-all duration-300 ease-in-out animate-move-up'>
      <img src={name} alt="speciality.png" className='w-24' />
      <p className='text-gray-700 text-sm font-medium'>{specialityData[index]?.speciality}</p>
    </Link>
  ))}
   </div>

    </div>
  )
}

export default Specialty;