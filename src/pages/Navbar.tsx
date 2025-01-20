import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className=' text-5xl text-bold font-medium'>AYESHA</div>
        <ul className=' flex justify-end mr-5px text-3xl gap-10 lg:gap-10 '>
          <li className='menuLink'><Link href="/">Home</Link></li>
          <li className='menuLink'><Link href="../../pages/About">About</Link></li>
          <li className='menuLink'><Link href="/Skills">Skills</Link></li>
          <li className='menuLink'><Link href="/Contact">Contact</Link></li>
   
        </ul>
        <GiHamburgerMenu className='md:hidden'size={30}/>

      </div>
        
    </div>
  )
}

export default Navbar
