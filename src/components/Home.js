import React from 'react'
import Banner from './Banner';
import Specialty from './Specialty';
import TopDoctor from './TopDoctor';
import { Link } from 'react-router-dom';
import AccountBanner from './AccountBanner';
import Footer from './Footer';
const Home = () => {
  return (
    <div>
        <Banner/>
        <Specialty/>
        <TopDoctor/>
        <div className='w-[990px] mx-auto my-20 text-center'>
        <Link to="/doctors"><button className='bg-blue-300 px-8 py-2 rounded-full'>more</button></Link>
        </div>
        <AccountBanner/>
        <Footer/>
        </div>
  )
}

export default Home;