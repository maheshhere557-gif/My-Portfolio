import React from "react";
import { SiMysql } from "react-icons/si";

import { FaAws, FaLink, FaLocationArrow, FaLinkedin, FaGithub } from "react-icons/fa";
const Projects = () => {
  const Projects = [
    {
      id: 1,
      TechStacks: "Next.js / MongoDb ",
      ProjectName: "JobStack",
      description:
        "A full-stack job board that connects employers and job seekers through dedicated dashboards, secure authentication, and real-time application tracking.",
      cover: "",
      live:"https://job-finder-3oe1.vercel.app/",
      github:"https://github.com/maheshhere557-gif/job_finder",
    },
    {
      id: 2,
      TechStacks: "React js / MongoDb / supabase auth",
      ProjectName: "Time2Cook",
      description: "A cross-platform weather application featuring real-time forecasts and an AI-powered assistant that provides personalized, natural-language weather advice.",
      cover: "",
      live:"https://time2-cook.vercel.app/",
      github:"https://github.com/maheshhere557-gif/Time2Cook",
    },
    {
      id: 3,
      TechStacks: "React js / Weather Api / Gemini-Api ",
      ProjectName: "WeatherWeb",
      description: "A responsive recipe discovery platform featuring secure user accounts and a comprehensive database of searchable meals, ingredients, and cooking instructions. ",
      cover: "",
      live:"https://weather-web-khaki-pi.vercel.app/",
      github:"https://github.com/maheshhere557-gif/Weather-Web",
    },
  ];
  return (
    <div className="bg-[#f8f6ec] h-[89vh] p-15">
      <div>
        {" "}
        <span className="text-orange-600 tracking-widest">2026</span>
      </div>
      <div className="border-b-2 w-[40%]">
        <span className="text-6xl font-semibold">
          Projects <span className="text-orange-600">.</span>
        </span>
      </div>
      <div className="h-auto flex justify-between  mt-10 w-full">
        {Projects.map((i) => (
          <div
            key={i.id}
            className="  bg-white shadow-lg h-[60vh] hover:scale-102 transition-all outline-none w-[25%] "
          >
            <div className="bg-white h-[40%] relative ">
              <div className="h-[400%] w-[400%] scale-25 absolute overflow-hidden top-0 left-0 origin-top-left">
                <iframe className="w-full h-full " src={i.live} frameborder="0" sandbox="allow-scripts allow-same-origin"></iframe>

              </div>

            </div>
            <div className="flex flex-col h-[60%] p-5 ">
              <span className="text-[0.6em] tracking-widest text-orange-600/80">
                {i.TechStacks}
              </span>
              <span className="text-2xl mt-4 ml-2">{i.ProjectName}</span>
              <p className="text-sm mt-5 opacity-70">{i.description}</p>
              <div className="bg-black h-[0.1em] mt-2 "></div>
              <div className="font-bold text-sm mt-5 flex gap-4"> 
                <a href={i.live}><span className="flex items-center gap-1">Live demo <FaLink/></span></a>
              <a href={i.github}><span className="flex items-center gap-2"> <FaGithub size={24}/> Source</span></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
