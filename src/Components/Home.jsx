import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import HeroImage from "../assets/Images/hero_image.png";
import Resume from "../assets/Images/resume.pdf"

const Home = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "Python Developer",
      ],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id='Home' className='min-h-[80vh] lg:min-h-screen flex items-center pt-28'>
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-10'>

          {/* Left-part */}
          <div className='flex-1 flex flex-col items-start text-left space-y-6 w-full'>

            <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-medium tracking-wide text-gray-300">Available for work</span>
            </div>

            {/* Heading */}
            <div className="space-y-6">

              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-snug text-white">
                Hi, My name is{" "}
                <span className="text-purple-400 ">
                  Nitin
                </span>
                <br />

                and I am a passionate
                <br />

                <div className="text-purple-400 ">
                  <span ref={el}></span>
                </div>
              </h1>

            </div>

            {/* Description */}
            <p className='text-gray-400 text-md sm:text-base max-w-md leading-relaxed'>I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.</p>

            <div className='flex flex-wrap items-center gap-4 pt-2'>
              <a href={Resume} target="_blank" className='px-6.5 py-3 rounded-xl font-semibold text-sm text-white shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300 text-center' style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec'
              }}>Download CV</a>

              <a href="#Projects" className='px-6.5 py-3 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center backdrop-blur-md'>View Projects</a>
            </div>

          </div>

          {/* Right-part */}
          <div className="flex-1 flex justify-center items-center w-full relative">
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 pointer-events-none translate-x-20"></div>

            <img
              src={HeroImage} alt="Developer Workspace Illustration"
              className="w-full max-w-lg lg:max-w-xl object-contain drop-shadow-2xl animate-floating"
            />
          </div>


        </div>
      </main>
    </div>
  )
}

export default Home
