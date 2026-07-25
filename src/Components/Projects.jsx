import React from 'react'
import project1 from "../assets/Images/project-img1.png"
import project2 from "../assets/Images/project-img2.png"
import project3 from "../assets/Images/project-img3.png"

const Projects = () => {
  return (
    <section id='Projects' className='min-h-screen py-16 px-4 bg-[#070B14] text-white sm:px-6 lg:px-10'>
      <div className="text-center mb-10">
        <h2 className="text-xxl sm:text-2xl lg:text-3xl font-extrabold tracking-normal">
          My Projects
        </h2>
        <div className="mt-3 h-1 w-14 mx-auto rounded-full bg-linear-to-r from-cyan-400 to-purple-500"></div>
        <h3 className='mt-4 text-md sm:text-base font-medium text-gray-400'>A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</h3>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='group rounded-xl border border-white/10 bg-white/4 backdrop-blur-xl p-4 transition-all duration-300 hover:-translate-y-3'>

          <div className='rounded-xl bg-white/4'>
          <img src={project1} alt="student management" className='rounded-xl h-62 sm:h-68 lg:h-64'/>
          </div>

          

        </div>

        <div className='group rounded-xl border border-white/10 bg-white/4 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-3'>
          
        </div>

        <div className='group rounded-xl border border-white/10 bg-white/4 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-3'>
          
        </div>
      </div>
    </section>
  )
}

export default Projects
