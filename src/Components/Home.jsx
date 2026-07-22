import React from 'react'
import ReactTypingEffect from 'react-typing-effect'

const Home = () => {
  return (
    <div className='pt-32 pb-12'>
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8'>

          {/* Left-part */}
          <div className='flex-1 flex flex-col items-start text-left space-y-6 w-full'>

            <div className="realtive inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-medium tracking-wide text-gray-300">Available for work</span>
            </div>

            {/* Heading */}
            <div className='space-y-2'>
              <p className='text-lg sm:text-xl text-gray-400 font-medium'>Hello, I'm</p>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white'>Nitin <span className='bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>Singh</span></h1>
            </div>

            {/* subheading */}
            <div className="flex flex-wrap items-center gap-2 text-base sm:text-lg font-medium text-gray-300">
              <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'Web Developer',
                'Python Developer',
                'Backend Developer'
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => {
                return <span className='text-[#8245ec]'>{cursor}</span>
              }}
              >
              </ReactTypingEffect>
              {/* <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-400">
                <span>Frontend Developer</span>
                <span>•</span>
                <span>Backend Developer</span>
                <span>•</span>
                <span>Python Developer</span>
              </div> */}
            </div>

            {/* Description */}
            <p className='text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed'>I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.</p>

            <div className='flex flex-wrap items-center gap-4 pt-2'>
              <a href="" className='px-6.5 py-3 rounded-xl font-semibold text-sm bg-linear-to-r from-cyan-500 to-purple-600 text-white shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300 text-center'>Download Resume</a>

              <a href="" className='px-6.5 py-3 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center backdrop-blur-md'>View Projects</a>
            </div>

          </div>

          {/* Right-part */}
          <div className="flex-1 flex justify-center items-center w-full relative">
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 pointer-events-none translate-x-20"></div>

            <img
              src="./assets/Images/hero_image.webp" alt="Developer Workspace Illustration"
              className="w-full max-w-lg lg:max-w-xl h-auto object-contain drop-shadow-2xl"
            />
          </div>


        </div>
      </main>
    </div>
  )
}

export default Home
