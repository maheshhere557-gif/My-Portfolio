import React from "react";
import {
  SiMongodb,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiSupabase,
} from "react-icons/si";
import Myimage from "../assets/Myimage.png";
import { useState } from "react";
import { useEffect } from "react";
const Home = () => {
  const [view,setViews]=useState(0)
useEffect(()=>{


 const countcheck=async(e)=>{
    try{

  if(!localStorage.getItem("View")){

      let res=await fetch("http://localhost:5000/api/viewCount")
      let data=await res.json()
      setViews(data?.Views)
      localStorage.setItem("View","yes")
  }else{
    console.log("view")
    let response=await fetch("http://localhost:5000/api/showCount")
    let viewdata=await response.json()
    console.table(viewdata.Views)
    setViews(viewdata.Views.ViewCount)
  localStorage.setItem("View","yes")

  }
    }catch(error){
      console.log("Frontend",error)
    }
  }
  countcheck()
  

  
 
},[])
 
  
  return (
    <div className="bg animate-fade-in-down h-[89vh] bg-[#f8f6ec]">
     
      <div className="h-[90%] flex flex-col   justify-center items-center w-full p-10  ">
     <div className="w-full flex justify-between pr-15"><h2 className="uppercase  text-orange-600/90 tracking-widest text-[0.8em]">Portfolio/2026</h2> <h2>👀Views:{view}</h2></div>
       <div className="flex items-center justify-between  w-full">
        
        <div className=" w-[30%] h-[90%]"> <span className="text-8xl">Building Usefull Things for the <span  className="text-orange-600/80">web.</span><span></span></span>
        <div className="mt-5 text-gray-500"><p>I am a Bca Graduate And FullStack developer creating Thoughtfull, Responsible Projects Using Mern Stack and NextJs </p></div>
        </div>
        <div className="w-[30%] flex flex-col items-center justify-center "> 
          <img src={Myimage} alt="" className=" contrast-120 shadow-[0_8px_10px] rounded-t-full shadow-orange-600/60 scale-80"/>
          </div>

          <div className="relative w-[30%]">

            <div className="bg-orange-600/70 h-88" >
              
            </div>
            <div className="bg-gray-800 h-88 absolute items-center justify-center flex flex-col gap-1  top-5 w-full right-4  "  >
              <div className=" w-[90%] border-b-2 border-gray-500 items-center p-2 flex justify-between text-sm ">
                <h4 className="text-orange-600"> 01</h4>
                <h4 className="text-white/90 ">About Me</h4>
              </div>

              <div className="border-b-2 border-gray-500 w-[90%] mt-5 h-30 text-gray-300">
                <p  > My name is Mahesh and i enjoy turning complex idea into clear digital Experiences, My Work spans Frontend interfaces, backend systems, mobile apps, and the Apis that connect them. </p>
              </div>
              <div className=" gap-2 flex items-center border-gray-500  w-[90%] h-20 mt-2 border-b-2 b">
                <SiMongodb size={32} className="text-green-500"/>
                <SiReact size={32} className="text-sky-300"/>
                <SiTailwindcss size={32} className="text-sky-400"/>
                <SiNextdotjs size={32} className="text-black"/>
                <SiNodedotjs size={32} className="text-green-500"/>
                <SiSupabase size={32} className="text-green-700"/>
                +

              </div>


            </div>
          </div>
       
         </div>
     
      </div>
    </div>
  );
};

export default Home;
