import React, { useState } from "react";
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
const Contact = () => {
  const [name,setName]=useState("")
  const [email,setemail]=useState("")
  const [description,setdescription]=useState("")

  const submitResponse =async(e)=>{
    try{
      let res=await fetch("http://localhost:5000/api/emailjs",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,email,description})
      })

      console.log(res.json())
    }catch(e){
      console.log(e)
    }
  }
  return (
    <div className="flex flex-col md:flex-row bg-[#f8f6ec] p-10 h-[89vh] justify-between">
      
      <div className=" hidden md:flex flex-col  w-[40%] p-5 h-24">
        <p className="uppercase text-orange-600/90 text-[0.8em] font-semibold">
          / Start Conversation
        </p>
        <span className="font-semibold tracking-tighter text-8xl">
          Let's make something{" "}
          <span className="text-orange-600/80">worth remembering</span>{" "}
        </span>
        <span className="flex items-center gap-5 mt-5">
          Have Something in Your Mind <FaArrowRight />{" "}
        </span>
      </div>
      <div className="text-orange-600 md:hidden w-full">

          / Start Conversation

        </div>
      <div className=" relative w-full md:w-[50%] flex items-center justify-center">
       
        <div className="md:w-[70%] bg-orange-600/70 h-full"></div>
        
        <div className="md:w-[70%] bottom-10 absolute flex flex-col p-10 md:rounded-none rounded md:left-20 md:bottom-6 bg-gray-800 md:h-full">
          <div className=" w-full  border-b h-8 border-gray-600 text-[0.8em] flex justify-between uppercase text-orange-600 opacity-90">
            Tell Me About It{" "}
            <span className="text-white"> All Fields Required</span>
          </div>
          <div className=" w-full  border-b h-20 mt-10 border-gray-600 text-[0.8em] flex flex-col  uppercase  text-white opacity-90">
            <span className="text-white"> Name</span>
            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Your Name"
              className="outline-none mt-6"
            />
          </div>
          <div className=" w-full  border-b h-20 mt-10 border-gray-600 text-[0.8em] flex flex-col  uppercase  text-white opacity-90">
            <span className="text-white"> Email</span>
            <input
              type="text"
              value={email}
              onChange={(e)=>setemail(e.target.value)}
              placeholder="Example@gmail.com"
              className="outline-none mt-6"
            />
          </div>
          <div className=" w-full  border-b h-30 mt-10 border-gray-600 text-[0.8em] flex flex-col  uppercase  text-white opacity-90">
            <span className="text-white"> Description</span>
            <textarea
            value={description}
              onChange={(e)=>setdescription(e.target.value)}
              placeholder="write Anything"
              rows={4}
              className="mt-4 outline-none"
            ></textarea>
          </div>
          <div className="flex items-center  gap-10 mt-10">
            <button onClick={submitResponse} type="submit" className="text-white border-2 border-orange-600 p-1 rounded-sm w-30 text-center flex items-center justify-center gap-2 hover:bg-orange-600 transition all">Submit <FaArrowRight/></button>
            <p className="text-center text-xl text-white font-bold">Or </p>
            <a href="https://www.linkedin.com/in/mahesh-h-j-592a6b425">
              <FaLinkedin className="text-sky-500 " size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
