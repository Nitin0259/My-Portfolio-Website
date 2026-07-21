import React, { useState } from 'react'

const Navbar = () => {

  const [active, setActive] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <header className='fixed top-0 left-0 z-50 w-full'>
        <nav className=' flex h-20 items-center justify-between border border-white/10 bg-[#070B14]/70 px-10 backdrop-blur-xl'>

          <a href="#" className={"group flex items-center gap-3"}>

            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500/20 via-purple-500/20 to-transparent p-px shadow-lg shadow-cyan-500/10 transition-all duration-300 group-hover:shadow-cyan-500/30">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#070B14] transition-colors duration-300 group-hover:bg-linear-to-br group-hover:from-cyan-500 group-hover:to-purple-600">
                <span className="text-sm font-extrabold tracking-wider text-cyan-400 transition-colors duration-300 group-hover:text-white">
                  NS
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="text-[20px] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-gray-100 sm:text-[24px]">
                Nitin <span className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Singh</span>
              </h1>
              <span className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">
                Full Stack Developer
              </span>
            </div>
          </a>
          
          {/* Menus */}
          <ul className={`absolute top-20 left-0 gap-10 w-full bg-[#070B14] transition-all duration-300 lg:static lg:flex lg:w-auto lg:bg-transparent ${sidebarOpen ? "flex flex-col items-center" : "hidden"}`}>

            <li>
              <a href="#"
                className={`group relative text-md font-medium transition ${active === "#" ? "text-cyan-400" : "text-white" }`}>
                Home
                <span
                  className="absolute -bottom-2 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-cyan-400"></span>
              </a>
            </li>

            <li>
              <a href="#About" className='text-md font-medium text-slate-300 transition hover:text-cyan-400'>About</a>
            </li>

            <li>
              <a href="#Skills" className='text-md font-medium text-slate-300 transition hover:text-cyan-400'>Skills</a>
            </li>

            <li>
              <a href="#Projects" className='text-md font-medium text-slate-300 transition hover:text-cyan-400'>Project</a>
            </li>

            <li>
              <a href="#Contact" className='text-md font-medium text-slate-300 transition hover:text-cyan-400'>Contact</a>
            </li>
          </ul>

          {/* Right-part */}
          <div className='hidden items-center gap-4 lg:flex'>

            {/* GitHub */}
            <a href="https://github.com/Nitin0259"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 backdrop-blur-xl transition duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400">
              <i className="fa-brands fa-github"></i>
            </a>

            {/* Linkedin */}
            <a href="https://www.linkedin.com/in/nitin-singh-a6524a39a/"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 backdrop-blur-xl transition duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            {/* Contact Button */}
            <a href="#Contact"
              className="rounded-xl bg-linear-to-r from-cyan-500 to-purple-600 px-6 py-3 text-md font-semibold text-white shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/40">
              Contact Me
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white"
          >
            <i className={`fa-solid ${sidebarOpen ? "fa-xmark" : "fa-bars"} text-xl`} />
          </button>
        </nav>

      </header>
    </div>
  )
}

export default Navbar
