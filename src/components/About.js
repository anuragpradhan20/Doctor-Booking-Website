import React from 'react'
import aboutImage from '../assets/assets_frontend/about_image.png'
import Footer from './Footer'
const About = () => {
  return (
    <div className='w-[990px] mx-auto mt-20'>
        <h1 className='text-2xl font-medium text-gray-600 text-center mb-16'>ABOUT US</h1>
        <div className='flex gap-8'>
         <img src={aboutImage} alt="about.png" className='w-96'/>
         <div >
            <p className='text-gray-700 text-sm mb-8 text-justify'>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
            <p className='text-gray-700 text-sm mb-8 text-justify'>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
            <p className='text-gray-700 text-lg font-medium mb-4'>Our Vision</p>
            <p className='text-gray-700 text-sm mb-8 text-justify'>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
         </div>
        </div>
        <h1 className='text-2xl font-medium text-gray-600 text-left mt-8 mb-4'>WHY CHOOSE US</h1>
        <div className='w-full flex'>
          <div className='border px-16 py-8  cursor-pointer flex flex-col hover:bg-blue-500'>
           <h3 className='text-base font-medium mb-4'>EFFICIENCY:</h3>
           <p className='text-gray-700 text-sm'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className='border px-16 py-8 cursor-pointer flex flex-col hover:bg-blue-500'>
           <h3 className='text-base font-medium mb-4'>CONVENIENCE:</h3>
           <p className='text-gray-700 text-sm'>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className='border px-16 py-8 cursor-pointer flex flex-col hover:bg-blue-500'>
           <h3 className='text-base font-medium mb-4'>PERSONALIZATION:</h3>
           <p  className='text-gray-700 text-sm'>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About