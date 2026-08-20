import React from "react";
import { SiMysql,SiVercel ,SiReact,SiNextdotjs ,SiTailwindcss,SiNodedotjs,SiMongodb,SiJavascript} from "react-icons/si";
import {FaGithub} from "react-icons/fa"
const Skills = () => {
  return (
    <div className="bg-[#f8f6ec] h-[89vh] p-15">
      <div>
        {" "}
        <span className="text-orange-600 tracking-widest">2026</span>
      </div>
      <div className="border-b-2 w-[15%]">
        <span className="text-6xl font-semibold">
          Skills <span className="text-orange-600">.</span>
        </span>
      </div>
      <div className="h-94 items-center p-4 justify-between mt-15 flex"> 
       <div className=" shadow-lg shadow-gray-400  h-full w-[30%] bg-[#f8f6ec]/70 ">
        <div className="h-[40%] p-4"> <span className=" text-orange-600 flex items-center text-[0.8em] justify-between font-semibold">01 <span className="text-6xl">.</span></span>
          <span className="text-lg font-bold">Frontend </span>
          <div className="h-[0.1em] mt-4 opacity-50 bg-black"></div>
        </div>
        <div className="h-[60%] p-4">
          <p className="text-[0.8em] opacity-60" >Clear Interface ,responsive and pleasant to use</p>
          <div className="mt-4 gap-5 flex flex-col">
            <div className="flex gap-2 items-center font-semibold justify-between">
             <div className="flex gap-2 text-[0.8em]">
              <SiReact size={24} className="text-sky-500 "/>
              <h4>React</h4>
            </div>
            <div className="text-orange-600 text-[0.6em] font-semibold tracking-widest"> Intermediate</div>
            </div>
             <div className="flex gap-2 items-center font-semibold justify-between">
             <div className="flex gap-2 text-[0.8em]">
              <SiNextdotjs size={24}  />
              <h4>Next.js</h4>
            </div>
            <div className="text-orange-600 text-[0.6em] font-semibold tracking-widest"> Intermediate</div>
            </div>
             <div className="flex gap-2 items-center font-semibold justify-between">
             <div className="flex gap-2 text-[0.8em]">
              <SiTailwindcss size={24} className="text-sky-500 "/>
              <h4>Tailwindcss</h4>
            </div>
            <div className="text-orange-600 text-[0.6em] font-semibold tracking-widest"> Intermediate</div>
            </div>
            
          </div>
        </div>

       </div>
       
        <div className=" shadow-lg shadow-gray-400  h-full w-[30%] bg-[#f8f6ec]/70 ">
        <div className="h-[40%] p-4"> <span className=" text-orange-600 flex items-center text-[0.8em] justify-between font-semibold">01 <span className="text-6xl">.</span></span>
          <span className="text-lg font-bold">Backend </span>
          <div className="h-[0.1em] mt-4 opacity-50 bg-black"></div>
        </div>
        <div className="h-[60%] p-4">
          <p className="text-[0.8em] opacity-60" >Reliable APis and data models built real product needs</p>
          <div className="mt-4 gap-5 flex flex-col">
            <div className="flex gap-2 items-center font-semibold justify-between">
             <div className="flex gap-2 text-[0.8em]">
              <SiNodedotjs size={24} className="text-green-700 "/>
              <h4>Node.js</h4>
            </div>
            <div className="text-orange-600 text-[0.6em] font-semibold tracking-widest"> Intermediate</div>
            </div>
             <div className="flex gap-2 items-center font-semibold justify-between">
             <div className="flex gap-2 text-[0.8em]">
              <SiMongodb size={24} className="text-green-700" />
              <h4>MongoDB Atlas</h4>
            </div>
            <div className="text-orange-600 text-[0.6em] font-semibold tracking-widest"> Intermediate</div>
            </div>
             <div className="flex gap-2 items-center font-semibold justify-between">
             <div className="flex gap-2 text-[0.8em]">
              <SiTailwindcss size={24} className="text-white "/>
              <h4>Rest Apis</h4>
            </div>
            <div className="text-orange-600 text-[0.6em] font-semibold tracking-widest"> Intermediate</div>
            </div>
            
          </div>
        </div>

       </div>
        <div className=" shadow-lg shadow-gray-400  h-full w-[30%] bg-[#f8f6ec]/70 ">
        <div className="h-[40%] p-4"> <span className=" text-orange-600 flex items-center text-[0.8em] justify-between font-semibold">01 <span className="text-6xl">.</span></span>
          <span className="text-lg font-bold">Workflow </span>
          <div className="h-[0.1em] mt-4 opacity-50 bg-black"></div>
        </div>
        <div className="h-[60%] p-4">
          <p className="text-[0.8em] opacity-60" >Build, Push, Deploy</p>
          <div className="mt-4 gap-5 flex flex-col">
            <div className="flex gap-2 items-center font-semibold justify-between">
             <div className="flex gap-2 text-[0.8em]">
              <SiJavascript size={24} className="text-yellow-400 "/>
              <h4>Javascript</h4>
            </div>
            <div className="text-orange-600 text-[0.6em] font-semibold tracking-widest"> Intermediate</div>
            </div>
             <div className="flex gap-2 items-center font-semibold justify-between">
             <div className="flex gap-2 text-[0.8em]">
              <FaGithub size={24}  />
              <h4>Git/Github</h4>
            </div>
            <div className="text-orange-600 text-[0.6em] font-semibold tracking-widest"> Intermediate</div>
            </div>
             <div className="flex gap-2 items-center font-semibold justify-between">
             <div className="flex gap-2 text-[0.8em]">
              <SiVercel size={24} className="text-black "/>
              <h4>Vercel</h4>
            </div>
            <div className="text-orange-600 text-[0.6em] font-semibold tracking-widest"> Intermediate</div>
            </div>
            
          </div>
        </div>

       </div>
      </div>
    </div>
  );
};

export default Skills;
