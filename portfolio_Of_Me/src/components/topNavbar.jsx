import React from 'react'
import { Link } from 'react-router-dom'

const TopNavbar = () => {
  return (
    <nav className="flex w-full items-center shadow-md fixed h-[10%] bg-[#f8f6ec] text-white" >
   <div className='w-[80%]  text-2xl font-extrabold text-black pl-6'><Link to="/"><h2 className='border w-10 text-center rounded-md bg-white'>M</h2></Link></div>
   
      <div className='font-bold text-gray-500 text-[0.8em] p-6 opacity-80 flex w-[50%] justify-between'> 
        <Link to="/"> <div className=' hover:text-orange-600'>Home</div></Link>
        <Link to="/about"> <div className=' hover:text-orange-600'>About</div></Link>
        <Link to="/projects"> <div className=' hover:text-orange-600'>Projects</div></Link>
        <Link to="/skills"> <div className=' hover:text-orange-600'>Skills</div></Link>
        <Link to="/contact"> <div className=' hover:text-orange-600'>Contact</div></Link>
        
        </div>
      
    </nav>
  )
}

export default TopNavbar
