import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {doctors} from '../assets/assets_frontend/assets'
import Footer from './Footer';
import Booking from './Booking';
import DoctorCard from './DoctorCard';
import { Link } from 'react-router-dom';
const Appointment = () => {
    const [doctorDetails,setDoctorDetails]=useState(null);
    const [specialityDoctors,setSpecialityDoctors]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
     if(id===undefined)
     {
        setDoctorDetails(null);
     }
     else{
        setDoctorDetails(doctors.find((doctor)=>doctor._id===id))
       
     }
    },[id])
    useEffect(()=>{
     if(doctorDetails==null)
     {
      setSpecialityDoctors([]);
     }
     else{
      setSpecialityDoctors(doctors.filter((doctor)=>doctor.speciality===doctorDetails.speciality && doctor._id!==doctorDetails._id))
     }
    },[doctorDetails])
    if(doctorDetails==null) return;
   return (
    <div className='w-[990px] mx-auto mt-10'>
      <div className='flex gap-4'>
      <img src={doctorDetails.image} alt="" className='w-1/4 h-1/3 bg-blue-400 rounded-lg'/> 
       <div className='w-3/4'>
       <div className='w-full border border-gray-400 p-6 rounded-lg '>
       <h1 className='text-3xl font-medium text-gray-700'>{doctorDetails.name}</h1>
       <p className='mt-2 text-gray-700 font-medium'><span>{doctorDetails.degree}</span>{"-"}<span>{doctorDetails.speciality}</span>{" "}<span>{`(${doctorDetails.experience})`}</span></p>
       <h1 className='text-base font-medium mt-4'>About</h1>
       <p className='mt-1 text-sm text-gray-700 text-justify font-sans'>{doctorDetails.about}</p>
       <p className='mt-2 text-gray-700 font-medium'>Appointment Fee:${doctorDetails.fees}</p>
       </div>
       <div>
        <Booking/>
       </div>
       </div>
       </div>
      <div className='mx-auto my-10'>
       <h1 className='text-2xl font-medium text-center'>Related Doctors</h1>
       <p  className='text-sm text-gray-600 text-center mt-4 mb-8'>Simply browse through our extensive list of trusted doctors.</p>
       <div className='flex gap-4 flex-wrap'>
       {
          specialityDoctors.map((doctor,index)=><Link to={`/appointement/${doctor._id}`} key={index}><DoctorCard  id={doctor._id} name={doctor.name} image={doctor.image} speciality={doctor.speciality}/></Link>)
       }
       </div>
       
      </div>
      <Footer/>
    </div>
  )
}

export default Appointment;