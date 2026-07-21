import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div className='relative min-h-screen overflow-x-hidden bg-linear-to-br from-[#050816] via-[#0B1120] to-[#020617] text-white'>
      {/* <!-- Cyan Glow --> */}
    <div class="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[160px]"></div>

    {/* <!-- Purple Glow --> */}
    <div class="absolute bottom-0 right-0 h-125 w-125 rounded-full bg-purple-600/20 blur-[180px]"></div>

      {/* Content */}
      <div className='relative z-10'>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
