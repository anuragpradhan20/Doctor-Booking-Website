import React from 'react'
import { Link } from 'react-router-dom';
import {specialityData} from '../assets/assets_frontend/assets'
import Department from './Department';
import Footer from './Footer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
const Doctors = () => {
  const [activeIndex, setActiveIndex] = useState(null); 
  const {speciality}=useParams();
  useEffect(() => {
    const index = specialityData.findIndex((specialitys) => specialitys.speciality === speciality);
    setActiveIndex(index);
  }, [speciality]);
  return (
    <div className='w-[990px] mx-auto mt-10'>
        <h3 className='text-gray-600 font-medium'>Browse through the doctors specialist.</h3>
        <div className='w-full flex gap-6 mt-4' >
          <div className='flex flex-col gap-4'>
            {
                specialityData.map((specialitys,index)=>( <Link to={`/doctors/${specialitys.speciality}`} key={index}><button className={`w-[200px] border border-gray-400 px-4 py-1 text-gray-600 rounded-md font-medium text-left 
              ${activeIndex === index ? 'bg-gray-200 text-black' : 'bg-white'}`}  onClick={() => setActiveIndex(index)}>{specialitys.speciality}</button></Link>))
            }
          </div>
           <Department/>
        </div>
        <Footer/>
    </div>
  )
}

export default Doctors;