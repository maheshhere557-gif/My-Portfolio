import React from "react";
import { FaArrowRight ,FaLinkedin} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="flex bg-[#f8f6ec] p-10 h-[89vh] justify-between">
      <div className="w-[40%] p-5 h-24">
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
      <div className=" relative w-[50%] flex items-center justify-center">
        <div className="w-[70%] bg-orange-600/70 h-full"></div>
        <div className="w-[70%] absolute flex flex-col p-10 left-20 bottom-6 bg-gray-800 h-full">
          <div className=" w-full  border-b h-8 border-gray-600 text-[0.8em] flex justify-between uppercase text-orange-600 opacity-90">
            Tell Me About It{" "}
            <span className="text-white"> All Fields Required</span>
          </div>
          <div className=" w-full  border-b h-20 mt-10 border-gray-600 text-[0.8em] flex flex-col  uppercase  text-white opacity-90">
            <span className="text-white"> Name</span>
            <input type="text" placeholder="Your Name" className="outline-none mt-6" />
          </div>
          <div className=" w-full  border-b h-20 mt-10 border-gray-600 text-[0.8em] flex flex-col  uppercase  text-white opacity-90">
            <span className="text-white"> Email</span>
            <input type="text" placeholder="Example@gmail.com" className="outline-none mt-6" />
          </div>
          <div className=" w-full  border-b h-30 mt-10 border-gray-600 text-[0.8em] flex flex-col  uppercase  text-white opacity-90">
            <span className="text-white"> Description</span>
            <textarea placeholder="write Anything" rows={4} className="mt-4 outline-none"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
