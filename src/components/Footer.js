import React from 'react'
import logo from '../assets/assets_frontend/logo.svg'
const Footer = () => {
  return (
    <div className='w-[990px] mx-auto mt-20 mb-10'>
     <div className='w-full flex justify-between'>
     <div>
     <img src={logo} alt='logo.png' className='w-40'></img>
     <p className='w-2/5 text-sm text-gray-500 font-sans text-justify mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
     <p></p>
     </div>
     <div className='w-3/5 flex gap-16'>
     <div className='flex flex-col gap-2 text-left'>
        <h1 className='text-lg font-medium'>COMPANY</h1>
        <p className='text-sm font-sans text-gray-500'>Home</p>
        <p className='text-sm font-sans text-gray-500'>About us</p>
        <p className='text-sm font-sans text-gray-500'>Delivery</p>
        <p className='text-sm font-sans text-gray-500'>Privacy Policy</p>
   </div>
    <div className='flex flex-col gap-2 text-left'>
        <h1 className='text-lg font-medium'>GET IN TOUCH</h1>
        <p className='text-sm font-sans text-gray-500'>+0-000-000-000</p>
        <p className='text-sm font-sans text-gray-500'>greatstackdev@gmail.com</p>
    </div>
     </div>
     </div>
     <p className='text-center text-sm py-2  border-t border-gray-300 mt-6'>Copyright 2024 @ Greatstack.dev - All Right Reserved.</p>
    </div>
  )
}

export default Footer;