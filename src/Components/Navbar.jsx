import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const menuItems = [
    { href: "#", label: "Home" },
    { href: "#About", label: "About" },
    { href: "#Skills", label: "Skills" },
    { href: "#Projects", label: "Projects" },
    { href: "#Contact", label: "Contact" }
  ]

  const [active, setActive] = useState("#");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLinkClick = (href) => {
    setActive(href);
    setSidebarOpen(false); // close mobile menu after tapping a link
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll)
      };
    }
  }, [])
  return (
    <div>
      <header className='fixed top-5 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2'>
        <nav className={`flex h-20 items-center justify-between rounded-2xl border border-white/10 px-6 lg:px-8 transition-all duration-300 ${scrolled ? "bg-[#070B14]/80 backdrop-blur-xl shadow-lg shadow-cyan-500/10" : "bg-transparent"}`}>

          <a href="#" className={"group flex items-center gap-2.5 sm:gap-3"}>

            <div className="relative flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500/20 via-purple-500/20 to-transparent p-px shadow-lg shadow-cyan-500/10 transition-all duration-300 group-hover:shadow-cyan-500/30">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#070B14] transition-colors duration-300 group-hover:bg-linear-to-br group-hover:from-cyan-500 group-hover:to-purple-600">
                <span className="text-xs sm:text-sm font-extrabold tracking-wider text-cyan-400 transition-colors duration-300 group-hover:text-white">
                  NS
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="text-[17px] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-gray-100 sm:text-[20px] md:text-[24px] leading-tight">
                Nitin <span className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Singh</span>
              </h1>
              <span className="hidden sm:block text-[9px] md:text-[10px] font-medium tracking-widest text-gray-400 uppercase">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Menus */}
          <ul className={`absolute top-20 left-0 right-0 mx-4 rounded-2xl border border-white/10 bg-[#070B14]/50 backdrop-blur-2xl shadow-[0_0_30px_rgba(34,211,238,0.08)] py-8 transition-all duration-300 ${sidebarOpen ? "flex flex-col items-center gap-8" : "hidden"} lg:static lg:flex lg:flex-row lg:items-center lg:gap-10 lg:w-auto lg:bg-transparent lg:backdrop-blur-none
          lg:border-0 lg:shadow-none lg:py-0 lg:mx-0`}>

            {menuItems.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`group relative text-base font-medium transition ${isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-cyan-400"></span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right-part */}
          <div className='hidden items-center gap-4 lg:flex'>

            {/* GitHub */}
            <a href="https://github.com/Nitin0259"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 backdrop-blur-xl transition duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400">
              <i className="fa-brands fa-github"></i>
            </a>

            {/* Linkedin */}
            <a href="https://www.linkedin.com/in/nitin-singh-a6524a39a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 backdrop-blur-xl transition duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            {/* Contact Button */}
            <a href="#Contact"
              onClick={() => handleLinkClick('#Contact')}
              className="rounded-xl bg-linear-to-r from-cyan-500 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/40">
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
