import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaUser, FaFileAlt, FaPen, FaEnvelope } from 'react-icons/fa'

const navigationItems = [
  { label: 'Home', path: '/', icon: FaHome },
  { label: 'About', path: '/about', icon: FaUser },
  { label: 'Projects', path: '/projects', icon: FaFileAlt },
  { label: 'Skills', path: '/skills', icon: FaPen },
  { label: 'Contact', path: '/contact', icon: FaEnvelope },
]

const Bottomnav = () => {
  return (

    <nav className='md:hidden fixed h-[8%] px-2 z-10 py-1   bottom-0 w-full'>
      <div className=' bg-[#171717]/90 rounded-xl flex  p-2 items-center justify-between h-full '> 
        
       {navigationItems.map((item)=>{
          const Icon=item.icon

        return(
          <NavLink key={item.path} to={item.path} end={item.path=="/"} className={({isActive})=>` flex flex-col ${isActive?" bg-[#f8f6ec] text-orange-600":" text-gray-400"} rounded-lg h-12 w-16  duration-200 transition-all items-center justify-center`}>
              <Icon/>
              <label className='text-sm'>{item.label}</label>
          </NavLink>
        )
       })}
      </div>
    </nav>
  )
}

export default Bottomnav
