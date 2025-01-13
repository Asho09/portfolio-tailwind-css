// "use client";

// import Contact from "./components/Contact";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import Skills from "./components/Skills";
// import About from "./components/About";
// import "./globals.css"
// import Footer from "./components/Footer";


import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link"

// contact
import { IoMdMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";




export default function Home() {
  
  return (
  //  <main>
  //    <Navbar />
  //    <Hero />
  //    <Skills />
  //    <Contact />
  //    <About />
  //    <Footer />
  //  </main>
<>
   <div className='container pt-8'>
        <div className='flex justify-between items-center'>
          <div className=' text-5xl text-bold font-medium pl-10px'>AYESHA</div>
          <ul className=' flex justify-end mr-5px text-3xl gap-10 lg:gap-10 '>
            <li className='menuLink'><a href="/">Home</a></li>
            <li className='menuLink'><Link href="/about">About</Link></li>
            {/* <li className='menuLink'><a href="/Skills">Skills</a></li> */}
            <li className='menuLink'><Link href="/Skills">Skills</Link></li>
            <li className='menuLink'><Link href="/Contact">Contact</Link></li>
     
          </ul>
          <GiHamburgerMenu className='md:hidden'size={30}/>
  
        </div>
          
      </div>


{/* // Hero */}
 <div id="hero" className="min-h-screen w-100 bg-no-repeat flex justify-center pt-20 p-32">
     
        <Image src="/image.jpg"alt="my-pic" width={600} height={600} className=" flex justify-center"></Image>
        <div className='text-center text-[100px] sm:text-[130px] font-bold leading-tight flex justify-center items-center'>
        
        <p data-aos="zoom-in-up">I'm Ayesha Khan</p>
        
        </div>
        {/* <div className=' container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
      
      </div> */}
    </div>


{/* Skills */}
<div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl '>Techonologies I Work With</h2>
                <p className='text-gray-700 pt-2'>I have a solid foundation in web development.,specializing in HTML, CSS, and javascript. My experience extend to using framework like react and next.js to create dynamic and user friendly applications.</p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-gray-700 text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">Node.js</h2>
                    </div>

                </div>
            </div>
        </div>

    </div>

    {/* Contact */}
    <div id='contact' className='pt-32 container flex justify-between'>
            <div className='grid md:grid-cols-2 gap-10'>
                <div className='space-y-8'>
                    <h2 className='text-5xl ' data-aos="zoom-in-up">Get In Touch</h2>
                    <p className='text-gray-700 text-[18px] pt-2' data-aos="zoom-in-up">
                        Drop me a line, give me a call, or send me a message by submitting the form.
                    </p>
                    <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    <IoMdMail size={30} />xyz@gmail.com 
                    </div><br />
                    <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    <BsTelephoneFill size={30}/>(021)000-0000
                    
                </div>
                <div className='space-y-8'>
                    <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                        className='h-[40px] border-transparent border-red-300'
                        is='name' />
                    </div>
                    <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                        className='h-[40px] border-transparent border-red-300'
                        is='email' />
                    </div>
                    <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                        <label htmlFor="message">Message</label>
                        <textarea className='h-[40px] border-transparent border-red-300'
                        is='message'rows={8} ></textarea>
                        
                    </div>
                    <button className='bg-red-400 p-2 px-6 justify-center' data-aos="zoom-in-up">Send</button>
                </div>
            </div>
    </div>
        </div>


{/* about */}

<div id="about"className='container pt-32 '>
<h2 className='text-4xl md:text-5xl' data-aos="zoom-in-up">About Me</h2>
<p className='text-gray-700 pt-4' data-aos="zoom-in-up" >
    I am a student at GIAIC, pursuing a course in Artificial Intelligent, Web 3.0, and Metaverse.
    Passoniate about technology and constantly learning new skills to stay up-to-date with the latest innovation.
</p>
    </div>



        {/* FOoter */}
        <div className='mt-16 py-6 text-center bg-red-400'>
      ©Aash | All rights reserved 2024
    </div>


    </>

  );
}
