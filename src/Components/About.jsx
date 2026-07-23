import React from 'react'
import ProfileImg from '../assets/Images/profile-pic.png'
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section id='#About' className='min-h-screen py-16 px-4 bg-[#070B14] text-white sm:px-6 lg:px-10'>
      <div className='max-w-7xl mx-auto flex flex-col items-center'>

        <div className='text-center mb-16'>
          <h2 className='text-xxl sm:text-2xl lg:text-3xl font-extrabold tracking-tight'>About Me</h2>
          <div className="mt-2 h-1 w-16 mx-auto rounded-full bg-linear-to-r from-cyan-400 to-purple-500"></div>
        </div>

        {/* Image & Bio */}
        <div className="lg:col-span-5 flex justify-center">
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="relative group">

              {/* Glow Effect */}
              <div className="absolute -inset-2 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 blur-xl opacity-20 group-hover:opacity-50 transition duration-500"></div>

              {/* Image Border */}
              <div className="relative w-80 h-80 sm:w-74 sm:h-74 lg:w-80 lg:h-80 rounded-full p-1 bg-linear-to-r from-cyan-400 to-purple-600">

                <div className="w-full h-full rounded-full overflow-hidden bg-[#070B14]">

                  <img
                    src={ProfileImg}
                    alt="Nitin Singh"
                    className="w-full h-full object-cover rounded-full transition duration-500"
                  />

                </div>

              </div>

            </div>
          </Tilt>
        </div>

      </div>
    </section>
  )
}

export default About
