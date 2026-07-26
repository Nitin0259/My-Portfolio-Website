import React from 'react'

const Footer = () => {

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId)

        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <footer className='py-14 px-5 bg-[#070B14] text-white sm:px-6 lg:px-10'>
            <div className='max-w-7xl mx-auto flex flex-col items-center gap-6'>
                <h2 className='items-center text-md sm:text-lg lg:text-xl font-semibold tracking-normal text-purple-400'>Nitin Singh</h2>

                <ul className='flex flex-wrap items-center justify-center gap-4 sm:gap-6'>
                    {[
                        { name: "Home", id: "#" },
                        { name: "About", id: "About" },
                        { name: "Skills", id: "Skills" },
                        { name: "Projects", id: "Projects" },
                        { name: "Contact", id: "Contact" }
                    ].map((link, index) => (
                        <button
                            key={index}
                            onClick={() => handleScroll(link.id)}
                            className="text-xs sm:text-base text-gray-400 transition hover:text-purple-400 cursor-pointer"
                        >
                            {link.name}
                        </button>
                    ))}
                </ul>

                {/* Social links */}
                <div className='flex items-center gap-4'>
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

                <p className='items-center text-sm sm:text-base text-gray-400'>© 2026 Nitin Singh. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
