import React from "react";
import ProfileImg from "../assets/Images/profile-pic.png";
import Tilt from "react-parallax-tilt";
import Resume from "../assets/Images/resume.pdf"

const About = () => {
  return (
    <section
      id="About"
      className="min-h-screen py-16 px-4 bg-[#070B14] text-white sm:px-6 lg:px-10"
    >
      <div className="text-center mb-10">
        <h2 className="text-xxl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
          About Me
        </h2>
        <div className="mt-2 h-1 w-16 mx-auto rounded-full bg-linear-to-r from-cyan-400 to-purple-500"></div>
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
                <div className="relative w-80 h-80 sm:w-74 sm:h-74 lg:w-110 lg:h-110 rounded-full p-1 bg-linear-to-r from-cyan-400 to-purple-600">
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
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-xs font-medium tracking-wide text-cyan-300 uppercase">
                  Who I Am
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
                Passionate{" "}
                <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </h3>

              <p className="max-w-2xl text-gray-400 leading-8 text-[15px] sm:text-base">
                I'm a passionate{" "}
                <span className="font-semibold text-white">
                  Full Stack Developer
                </span>{" "}
                who enjoys transforming ideas into modern, responsive, and
                user-friendly web applications. I specialize in creating clean
                interfaces with{" "}
                <span className="text-cyan-400 font-medium">
                  React & Tailwind CSS
                </span>{" "}
                while building powerful backend solutions using{" "}
                <span className="text-purple-400 font-medium">
                  Python & Django
                </span>
                .
                <br />
                <br />
                My focus is writing clean, scalable code and continuously
                learning new technologies to build high-quality digital
                experiences that solve real-world problems.
              </p>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:border-cyan-400/40 transition">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <i className="fa-solid fa-user"></i>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Name
                  </p>
                  <p className="font-semibold text-white">Nitin Singh</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:border-cyan-400/40 transition">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                  <i className="fa-solid fa-location-dot"></i>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Location
                  </p>
                  <p className="font-semibold text-white">New Delhi, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:border-cyan-400/40 transition">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-pink-500/10 text-pink-400">
                  <i className="fa-solid fa-envelope"></i>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Email
                  </p>
                  <p className="font-semibold text-white break-all">
                    nitinsingh0259@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:border-cyan-400/40 transition">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <i className="fa-solid fa-briefcase"></i>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Status
                  </p>
                  <p className="font-semibold text-white">Available for Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="p-6 sm:p-8 mt-14 rounded-2xl bg-white/5 border border-white/10 flex flex-col space-y-6">
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

        {/* Download CV */}
        <div className="flex flex-wrap gap-5">
          <a href={Resume} target="_blank" className='px-6.5 py-3 rounded-xl font-semibold text-sm text-white shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300 text-center' style={{
            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec'
          }}>Download CV</a>

        </div>

      </div>
    </section>
  );
};

export default About;
