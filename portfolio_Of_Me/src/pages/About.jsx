import React from 'react'
import {SiMysql} from "react-icons/si"
import {FaAws,FaLocationArrow,FaLinkedin,FaGithub} from "react-icons/fa"
const About = () => {
  return (
    <div className='bg-[#f8f6ec] h-[89vh] p-10'>
      <div className='border-b-2 w-[25%]'><span className='text-6xl font-semibold'>About <span className='text-orange-600'>Me.</span></span></div>
      <div className='mt-10 flex justify-between'>
        <div className='w-[50%]'><span className='text-orange-600 tracking-widest'>A little Context</span>
        
        <p className='mt-10 text-lg'>BCA Graduate and full-stack web developer with hands-on experience building real-world applications using the MERN stack and Next.js. Skilled in developing responsive web and cross-platform mobile applications, integrating REST and thirdparty APIs, and deploying production-ready projects. Seeking a MERN Stack Developer fresher job to contribute to a fast-growing engineering team. </p>
        </div>
    
          
           <div className='bg-gray-800 absolute right-14 top-52 text-white/70 h-72 w-[30%] flex flex-col gap-2  items-center justify-center'>
            <div className=' w-[90%] h-10 border-b-2 border-gray-500'>
            <h3 className='uppercase text-sm tracking-widest'> Check me On </h3>

            </div>
              <div className='mt-8 w-[90%] h-34 flex gap-5 items-center'>
              <a href="https://github.com/maheshhere557-gif"><FaGithub size={40} className='text-white'/></a>

              
              <a href="https://www.linkedin.com/in/mahesh-h-j-592a6b425"><FaLinkedin size={40} className='text-blue-600'/></a>

            </div>

          
           
          </div>
          <div className='bg-orange-700/70   text-white/70 h-72 w-[30%] flex flex-col gap-2  items-center justify-center'>
            
          </div>
      </div>

      <span className='flex gap-5'> <FaLocationArrow size={28} className='text-orange-600'/><h2 className='text-2xl opacity-60'> Available For Work</h2></span>
    </div>
  )
}

export default About
