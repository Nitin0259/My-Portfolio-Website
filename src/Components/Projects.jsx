import React from 'react'
import project1 from "../assets/Images/project-img1.png"
import project2 from "../assets/Images/project-img2.png"
import project3 from "../assets/Images/project-img3.png"

const Projects = () => {

  const projectsData = [
    {
      title: 'Student Management System',
      description: 'A complete system to manage students, courses, and records efficiently.',
      tags: ['HTML', 'Tailwind', 'Django', 'Python', 'MySQL'],
      github: 'https://github.com/Nitin0259/Student-Management-System',
      demo: 'https://student-management-system-8mzt.onrender.com',
      image: project1,
    },
    {
      title: 'Agency AI',
      description: 'A responsive AI agency website featuring modern design, smooth animations, and service showcases.',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      github: ' https://github.com/Nitin0259/Agency-AI-Project',
      demo: 'https://nitin0259.github.io/Agency-AI-Project/',
      image: project2,
    },
    {
      title: 'Travel Booking Website',
      description: 'A modern travel booking platform with destination browsing, trip planning, and secure booking features.',
      tags: ['HTML', 'Tailwind', 'Javascript'],
      github: 'https://github.com/Nitin0259/Travel-Booking-website',
      demo: 'https://nitin0259.github.io/Travel-Booking-website/',
      image: project3,
    },
  ]
  return (
    <section id='Projects' className='min-h-[80vh] lg:min-h-screen py-18 px-5 bg-[#070B14] text-white sm:px-6 lg:px-10'>
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl uppercase font-extrabold tracking-normal">
          My Projects
        </h2>
        <div className="mt-3 h-1 w-14 mx-auto rounded-full bg-linear-to-r from-cyan-400 to-purple-500"></div>
        <p className='mt-4 text-lg  font-semibold text-gray-400'>A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

        {projectsData.map((project, index) => (
          <div
            key={index}
            className='flex flex-col justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group shadow-xl backdrop-blur-md'>

            <div>
              <div className='relative w-full h-68 rounded-xl overflow-hidden mb-5 bg-[#070B14] border border-white/10'>
                <img src={project.image} alt={project.title} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />
              </div>


              <h3 className='text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>
                {project.title}
              </h3>
              <p className='text-gray-400 text-xs sm:text-sm leading-relaxed mb-6'>{project.description}</p>
            </div>

            <div>
              <div className='flex flex-wrap gap-2 mb-6'>
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className='px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-gray-300'>
                    {tag}
                  </span>
                ))}
              </div>

              <div className='flex items-center gap-3'>
                <a
                  href={project.github}
                  target='_blank'
                  rel="noreferrer"
                  className='flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-white'
                >
                  <i className="fa-brands fa-github text-base"></i>
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target='_blank'
                  rel="noreferrer"
                  className='flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-purple-400 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300'
                  style={{
                    background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                    boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec'
                  }}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Projects
