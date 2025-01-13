import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import "../globals.css"


const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className=' text-5xl text-bold font-medium'>AYESHA</div>
        <ul className=' flex justify-end mr-5px text-3xl gap-10 lg:gap-10 '>
          <li className='menuLink'><a href="/">Home</a></li>
          <li className='menuLink'><a href="../../pages/About">About</a></li>
          <li className='menuLink'><a href="/Skills">Skills</a></li>
          <li className='menuLink'><a href="/Contact">Contact</a></li>
   
        </ul>
        <GiHamburgerMenu className='md:hidden'size={30}/>

      </div>
        
    </div>
  )
}

export default Navbar