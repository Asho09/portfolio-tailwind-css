import React from 'react'
import "../app/globals.css"

const Skills = () => {
  return (
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
  )
}

export default Skills