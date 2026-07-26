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
      setScrolled(window.scrollY > 20);

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [])
  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50">
        <nav className={`relative flex h-20 items-center px-8 lg:px-12 transition-all duration-300 ${scrolled
          ? "bg-[#070B14]/90 backdrop-blur-xl border-b border-white/10 shadow-lg" : "bg-transparent"}`}>

          <div className="flex items-center group relative cursor-pointer whitespace-nowra font-mono text-base font-bold tracking-tight transition-all duration-300 sm:text-lg md:text-xl">
            {/* Glow effect on hover */}
            <div className="absolute -inset-x-3 -inset-y-2 rounded-lg bg-[#82456c]/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"></div>

            <div className="relative flex items-center gap-0.5 sm:gap-1 whitespace-nowra">

              <span className="text-[#82456c] transition-transform duration-300 group-hover:-translate-x-0.5">
                &lt;
              </span>

              <span className="text-white transition-colors duration-300 group-hover:text-gray-100">
                Nitin
              </span>

              <span className="text-[#82456c] px-0.1 transition-transform duration-300 group-hover:scale-110">
                /
              </span>

              <span className="bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent transition-all duration-300">
                Singh
              </span>

              <span className="text-[#82456c] transition-transform duration-300 group-hover:translate-x-0.5">
                &gt;
              </span>
            </div>
          </div>

          {/* Menus */}
          <ul
            className={`absolute top-20 left-0 right-0 mx-4 rounded-2xl border border-white/10 bg-[#070B14]/70 backdrop-blur-2xl shadow-[0_0_30px_rgba(34,211,238,0.08)] py-8 transition-all duration-300 ${sidebarOpen ? "flex flex-col items-center gap-8" : "hidden"} lg:flex lg:absolute lg:top-1/2 lg:left-1/2 lg:right-auto lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex-row lg:items-center lg:gap-10 lg:mx-0 lg:py-0 lg:bg-transparent lg:backdrop-blur-none lg:border-0 lg:shadow-none`}>

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

            {/* Mobile Social Icons */}
            <div className="mt-2 flex items-center gap-4 lg:hidden">
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
            </div>

          </ul>

          {/* Right-part */}
          <div className='ml-auto hidden lg:flex items-center gap-4'>

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
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="ml-auto flex lg:hidden h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5"
          >
            <i className={`fa-solid ${sidebarOpen ? "fa-xmark" : "fa-bars"} text-xl`} />
          </button>
        </nav>

      </header>
    </div>
  )
}

export default Navbar
