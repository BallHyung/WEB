import React from 'react'
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact ,FaHtml5 ,FaCss3Alt} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Skills() {
  return (
    <div className='bg-purple-500 text-white py-16'>
      <div className="container mx-auto text-center">
        <h1 class="text-5xl font-extrabol"> My Skills Set</h1>
        <br/>
        <br/>
        <div className='flex justify-center'>
        <svg
          xmlns="FaReact"
          viewBox="0 0 17 17"
          fill="none"
          className="h-20 w-20">
          <FaReact />
                </svg>
               {/*icon*/}
                <svg
          xmlns="IoLogoJavascript"
          viewBox="0 0 15 15"
          fill="none"
          className="h-20 w-20">
          <IoLogoJavascript />
                </svg>
               {/*icon*/}
                <svg
          xmlns="FaHtml5"
          viewBox="0 0 15 15"
          fill="none"
          className="h-20 w-20">
          <FaHtml5 /></svg>
            {/*icon*/}
                <svg
          xmlns="FaCss3Alt"
          viewBox="0 0 15 15"
          fill="none"
          className="h-20 w-20">
          <FaCss3Alt />
              </svg>
               {/*icon*/}
            <svg
          xmlns="SiTailwindcss"
          viewBox="0 0 16 16"
          fill="none"
          className="h-20 w-20 ">
          <SiTailwindcss />
              </svg>
               </div>
        <br />
     </div>
    </div>
  )
}

export default Skills
