import React from 'react'
import logo from '../assets/assets_frontend/logo.svg'
import {NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='w-[990px] mx-auto mt-6 flex justify-between items-center'>
     <img src={logo} alt='logo.png' className='w-48'></img>
     <div className='flex gap-8'>
     <NavLink to="/"className={({ isActive }) => isActive ? 'font-medium text-sm pb-1 border-b-2 border-blue-700' : 'font-medium text-sm pb-1'}>HOME</NavLink>
     <NavLink to="/doctors"className={({ isActive }) => isActive ? 'font-medium text-sm pb-1 border-b-2 border-blue-700' : 'font-medium text-sm pb-1'}>ALL DOCTORS</NavLink>
     <NavLink to="/about"className={({ isActive }) => isActive ? 'font-medium text-sm pb-1 border-b-2 border-blue-700' : 'font-medium text-sm pb-1'}>ABOUT</NavLink>
     <NavLink to="/contact"className={({ isActive }) => isActive ? 'font-medium text-sm pb-1 border-b-2 border-blue-700' : 'font-medium text-sm pb-1'}>CONTACT</NavLink>
     </div>
     <div>
        <button className='bg-blue-500 px-4 py-2 rounded-full text-white font-medium'>Create Account</button>
     </div>
    </div>
  )
}

export default Header;