import Image from 'next/image'
import React from 'react'
import "../app/globals.css"



const Hero = () => {
  return (
    <div id="hero" className="min-h-screen w-100 bg-no-repeat flex justify-center pt-20 p-32">
     
        <Image src="/image.jpg"alt="my-pic" width={600} height={600} className=" flex justify-center"></Image>
        <div className='text-center text-[100px] sm:text-[130px] font-bold leading-tight flex justify-center items-center'>
        
        <p data-aos="zoom-in-up">I m Ayesha Khan</p>
        
        </div>
        {/* <div className=' container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
      
      </div> */}
    </div>
  )
}

export default Hero
