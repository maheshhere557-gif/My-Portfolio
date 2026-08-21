import React from "react";
import {
  SiMysql,
  SiVercel,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const Skills = () => {
  const skill = [
    {id:1,
      name: "frontend",
      description: "Clear Interface ,responsive and pleasant to use",
      skillist:[
         {no:1,name:"React.Js",icon:SiReact ,color:"text-sky-500",level:"Intermediate"},
        {no:2,name:"Next.Js",icon:SiNextdotjs,color:"text-black",level:"Intermediate"},
        {no:3,name:"Tailwindcss",icon:SiTailwindcss,color:"text-sky-500",level:"Intermediate"}
      ],
    },

    {
      id:2,
      name: "backend",
      description: " Reliable APis and data models built real product needs"
,
      skillist:[
         {no:1,name:"Node.Js",icon:SiNodedotjs,color:"text-green-600",level:"Intermediate"},
        {no:2,name:"MongoDB",icon:SiMongodb,color:"text-green-700",level:"Intermediate"},
        {no:3,name:"RestApis",icon:SiTailwindcss,color:"text-[#f8f6ec]",level:"Intermediate"}
      ],
    },

    {id:3,
      name: "Workflow",
      description: "Build, Push, Deploy",
      skillist:[
         {no:1,name:"Javascript",icon:SiJavascript,color:"text-yellow-600",level:"Intermediate"},
        {no:2,name:"Git/Github",icon:FaGithub,color:"text-black",level:"Intermediate"},
        {id:3,name:"Vercel",icon:SiVercel,color:"text-black",level:"Intermediate"}
      ],
    },
  ];
  return (
    <div className="bg-[#f8f6ec] md:h-[89vh] p-5 md:p-15">
      <div>
        {" "}
        <span className="text-orange-600 tracking-widest">2026</span>
      </div>
      <div className="border-b-2 w-[30%] md:w-[15%]">
        <span className=" text-4xl md:text-6xl font-semibold">
          Skills <span className="text-orange-600">.</span>
        </span>
      </div>
      <div className="md:h-94  items-center p-4 justify-between mt-5 md:mt-15 flex flex-col gap-6 md:flex-row">
        {skill.map((items)=>
        <div key={items.id} className="  shadow-lg shadow-gray-400  h-full  md:w-[30%] w-[95%] bg-[#f8f6ec]/70 ">
          <div className="h-[40%] p-4">
            {" "}
            <span className=" text-orange-600 flex items-center text-[0.8em] justify-between font-semibold">
             0{items.id} <span className="text-6xl">.</span>
            </span>
            <span className="text-lg font-bold">{items.name} </span>
            <div className="h-[0.1em] mt-4 opacity-50 bg-black"></div>
          </div>
          <div className="h-[60%] p-4">
            <p className="text-[0.8em] opacity-60">
              {items.description}
            </p>
            <div className="mt-4 gap-5 flex flex-col">
              {items?.skillist.map((i)=>{
                const Icons=i.icon
                return(
              <div  key={i.id} className="flex gap-2 items-center font-semibold justify-between">
                <div className="flex gap-2 text-[0.8em]">
                  <Icons size={24} className={`${i.color} drop-shadow-lg`} />
                  <h4>{i.name}</h4>
                </div>
                <div className="text-orange-600 text-[0.6em] font-semibold tracking-widest">
                  {" "}
                  {i.level}
                </div>
              </div>
)})}
            </div>
          </div>
        </div>
        )}

       
      </div>
    </div>
  );
};

export default Skills;
