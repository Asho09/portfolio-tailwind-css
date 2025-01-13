import React from 'react'
import { IoMdMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import "../app/globals.css"

const Contact = () => {
  return (
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
  )
}

export default Contact