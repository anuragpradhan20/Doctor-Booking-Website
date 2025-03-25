import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import DoctorCard from './DoctorCard';
import {doctors} from '../assets/assets_frontend/assets'
import { useEffect } from 'react';
const Department = () => {
    const [deptfilter,setDeptFilter]=useState([]);
    const {speciality}=useParams();
    useEffect(() => {
        if (speciality === undefined) {
            setDeptFilter(doctors); 
        } else {
            setDeptFilter(doctors.filter((doctor) => doctor.speciality === speciality));
            
        }
    }, [speciality]);

  return (
    <div className='flex gap-4 flex-wrap'>
     {   
        deptfilter.map((dept)=><DoctorCard key={dept._id} id={dept._id} name={dept.name} image={dept.image} speciality={dept.speciality}/>)
     }
    </div>
  )
}

export default Department