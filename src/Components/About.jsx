import React from "react";
import ProfileImg from "../assets/Images/profile-pic.png";
import Tilt from "react-parallax-tilt";
import Resume from "../assets/Images/resume.pdf"

const About = () => {
  return (
    <section
      id="About"
      className="min-h-screen py-16 px-5 bg-[#070B14] text-white sm:px-6 lg:px-10"
    >
      <div className="text-center mb-10">
        <h2 className="text-xxl sm:text-2xl lg:text-3xl font-extrabold tracking-normal">
          About Me
        </h2>
        <div className="mt-2 h-1 w-14 mx-auto rounded-full bg-linear-to-r from-cyan-400 to-purple-500"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-12">
          {/* Image & Bio */}
          <div className="lg:col-span-5 flex justify-center shrink-0">
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
                <div className="relative w-68 h-68 sm:w-72 sm:h-72 lg:w-100 lg:h-100 rounded-full p-1 bg-linear-to-r from-cyan-400 to-purple-600">
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

          {/* Right: Bio */}
          <div className="flex-1 flex flex-col space-y-8 max-w-2xl">
            {/* Heading */}
            <div className="space-y-5">
              <h3 className="text-3xl font-bold text-white">
                Who I Am
              </h3>

              <p className="text-gray-400 leading-7 text-[15px]">
                I'm a passionate Full Stack Developer with a strong foundation in
                building modern, responsive, and scalable web applications.
                I enjoy transforming ideas into real-world digital experiences using
                React, Tailwind CSS, Python, and Django.
              </p>
            </div>

            {/* Personal Information */}
            <div className="space-y-5 pt-2">

              <div className="flex items-center gap-3">
                <i className="fa-solid fa-user text-cyan-400 w-5"></i>
                <span className="text-gray-300">
                  <span className="font-semibold text-white">Name:</span> Nitin Singh
                </span>
              </div>

              <div className="flex items-center gap-3">
                <i className="fa-solid fa-location-dot text-purple-400 w-5"></i>
                <span className="text-gray-300">
                  <span className="font-semibold text-white">Location:</span> New Delhi, India
                </span>
              </div>

              <div className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-pink-400 w-5"></i>
                <span className="text-gray-300 break-all">
                  <span className="font-semibold text-white">Email:</span> nitinsingh0259@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <i className="fa-solid fa-briefcase text-emerald-400 w-5"></i>
                <span className="text-gray-300">
                  <span className="font-semibold text-white">Status:</span> Available for Work
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Education Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Education</h3>

            <div className="relative border-l border-white/10 ml-3 space-y-8 pl-6">

              {/* Item 1 */}
              <div className="relative">
                <div className="absolute -left-7.75 top-1.5 h-3.5 w-3.5 rounded-full bg-cyan-400 ring-4 ring-[#070B14]"></div>
                <span className="text-xs font-semibold text-cyan-400 block mb-1">2025 - Pursuing</span>
                <h4 className="text-base font-bold text-white">BCA (Bachelor of Computer Applications)</h4>
                <p className="text-xs text-gray-400 mt-0.5">Sri Guru Tegh Bahadur Khalsa College</p>
              </div>

              {/* Item 2 */}
              <div className="relative">
                <div className="absolute -left-7.75 top-1.5 h-3.5 w-3.5 rounded-full bg-purple-500 ring-4 ring-[#070B14]"></div>
                <span className="text-xs font-semibold text-purple-400 block mb-1">2024 - 2025</span>
                <h4 className="text-base font-bold text-white">Higher Secondary (12th)</h4>
                <p className="text-xs text-gray-400 mt-0.5">70%</p>
              </div>

              {/* Item 3 */}
              <div className="relative">
                <div className="absolute -left-7.75 top-1.5 h-3.5 w-3.5 rounded-full bg-cyan-400 ring-4 ring-[#070B14]"></div>
                <span className="text-xs font-semibold text-cyan-400 block mb-1">2022 - 2023</span>
                <h4 className="text-base font-bold text-white">Secondary (10th)</h4>
                <p className="text-xs text-gray-400 mt-0.5">80%</p>
              </div>

            </div>
          </div>

          {/* Goal */}
          <div className="p-6 sm:p-8">
            <h3 className="text-3xl font-bold mb-5">
              My Goal
            </h3>

            <p className="text-[16px] font-medium text-gray-400 leading-8">
              I aim to become a highly skilled Full Stack Developer and contribute to innovative and interactive projects that make a positive impact on people's lives.
            </p>

            <a href={Resume} target="_blank" className='inline-flex mt-8 px-7 py-3 rounded-xl font-semibold text-sm text-white shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300 text-center' style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec'
            }}>Download CV</a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
