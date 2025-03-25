import React from 'react'
import contactImage from '../assets/assets_frontend/contact_image.png'
import Footer from './Footer'
const Contact = () => {
  return (
    <div className='w-[990px] mx-auto mt-20'>
     <h1 className='text-2xl font-medium text-gray-600 text-center mb-16'>CONTACT US</h1>
     <div className='w-3/5 flex gap-8 mx-auto'>
      <img src={contactImage} alt="contact.png" className='w-1/2'/>
      <div className='w-1/2 flex flex-col justify-between'>
        <h1 className='text-xl font-medium text-gray-600 '>OUR OFFICE</h1>
        <p className='text-sm text-gray-500'>00000 Willms Station
        Suite 000, Washington, USA</p>
        <p className='text-sm text-gray-500'>Tel: (000) 000-0000
        Email: greatstackdev@gmail.com</p>
        <h1 className='text-xl font-medium text-gray-600 '>CAREERS AT PRESCRIPTO</h1>
        <p className='text-sm text-gray-500'>Learn more about our teams and job openings.</p>
        <button className='border border-black w-1/2 py-3 px-4 hover:bg-black hover:text-white'>Explore Jobs</button>
      </div>
     </div>
     <Footer/>
    </div>
    
  )
}

export default Contact