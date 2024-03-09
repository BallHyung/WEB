import React from 'react'
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const user = {
    name: "I",
    imagUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1UZVxSpFS8Cf2nB0tHSc2H-aaMaY5Yrz1Q&usqp=CAU'
}

function Name() {
  return (
    <div className='bg-gray-900 text-white py-16' >
      <div className="container mx-auto text-center">
        <h1 class="text-5xl font-extrabol">Hi My Suphawit Nimwatthana</h1>
        <p className='text-lg mt-4'>Welcome to Our Website</p>
        <h1 className='animate-bounce'>I'm a student of Phayao University.</h1>
        <br/>
        <center><img src={user.imagUrl} className='rounded-full' width='250'  /></center>
        <br />
        <div className='flex justify-center'>
        <svg
          xmlns="FaGithub"
          viewBox="0 0 17 17"
          fill="none"
          className="h-10 w-10">
                <a href="">
                  <FaGithub />
                </a></svg>
               {/*icon*/}
                <svg
          xmlns="FaLinkedinIn"
          viewBox="0 0 15 15"
          fill="none"
          className="h-10 w-10">
                <a href="">
                  <FaLinkedinIn />
                </a></svg>
               {/*icon*/}
                <svg
          xmlns="FaFacebookF"
          viewBox="0 0 15 15"
          fill="none"
          className="h-10 w-10">
                <a href="">
                <FaFacebookF />
                </a></svg></div>
        
        
        
      </div>
    </div>
  )
}

export default Name
