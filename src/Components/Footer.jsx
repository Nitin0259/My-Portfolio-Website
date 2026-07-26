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

                <div className=''>
                    <ul className='flex flex-wrap items-center justify-center gap-6'>
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
                                className="text-sm sm:text-base text-gray-400 transition hover:text-purple-400 cursor-pointer"
                            >
                                {link.name}
                            </button>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
