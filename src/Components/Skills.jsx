import React, { useState } from 'react'
import html from "../assets/Icons/html.png";
import css from "../assets/Icons/css.png";
import javascript from "../assets/Icons/javascript.png";
import react from "../assets/Icons/reactjs.png";
import tailwind from "../assets/Icons/tailwindcss.png";
import bootstrap from "../assets/Icons/bootstrap.png";
import python from "../assets/Icons/python.png";
import mysql from "../assets/Icons/mysql.png";
import git from "../assets/Icons/git.png";
import github from "../assets/Icons/github.png";
import vscode from "../assets/Icons/vscode.png";
import figma from "../assets/Icons/figma.png";
import render from "../assets/Icons/render.png";
import jquery from "../assets/Icons/jquery.png";
import django from "../assets/Icons/django.png";

const Skills = () => {

  const [activeTab, setActiveTab] = useState("All");

  const skillsData = [
    { name: 'HTML5', category: 'Frontend', level: '95%', icon: html },
    { name: 'CSS3', category: 'Frontend', level: '90%', icon: css },
    { name: 'JavaScript', category: 'Frontend', level: '90%', icon: javascript },
    { name: 'Tailwind CSS', category: 'Frontend', level: '85%', icon: tailwind },
    { name: 'React JS', category: 'Frontend', level: '80%', icon: react },
    { name: 'Python', category: 'Backend', level: '85%', icon: python },
    { name: 'Django', category: 'Backend', level: '80%', icon: django },
    { name: 'Bootstrap', category: 'Frontend', level: '89%', icon: bootstrap },
    { name: 'MySQL', category: 'Database', level: '80%', icon: mysql },
    { name: 'Git', category: 'Tools', level: '90%', icon: git },
    { name: 'GitHub', category: 'Tools', level: '90%', icon: github },
    { name: 'VS Code', category: 'Tools', level: '95%', icon: vscode },
    { name: 'Render', category: 'Tools', level: '70%', icon: render },
    { name: 'JQuery', category: 'Frontend', level: '80%', icon: jquery },
    { name: 'Figma', category: 'Tools', level: "75%", icon: figma },
  ];

  const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

  const filteredData = activeTab === "All" ? skillsData : skillsData.filter(skill => skill.category === activeTab);

  return (
    <section id='Skills' className='min-h-screen py-18 px-5 text-white sm:px-6 lg:px-10'>
      {/* Header-part */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl uppercase font-extrabold tracking-normal">
          My Skills
        </h2>
        <div className="mt-3 h-1 w-14 mx-auto rounded-full bg-linear-to-r from-cyan-400 to-purple-500"></div>
        <p className='mt-4 text-lg  font-semibold text-gray-400'>Technologies I work with</p>
      </div>

      {/* Filter-tabs */}
      <div className='flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12'>

        {categories.map((category) => (
          <button key={category} onClick={() => setActiveTab(category)} className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${activeTab === category ? 'bg-linear-to-r from-cyan-500 to-purple-600 text-white border-transparent shadow-lg shadow-cyan-500/25' : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'}`}>
            {category}
          </button>
        ))}
      </div>

      {/* Skills-Card */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

        {filteredData.map((skill, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-white/10 bg-white/4 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
          >

            <div className="flex justify-between items-start">

              <div className="h-14 w-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">

                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-9 h-9 object-contain transition duration-300 group-hover:scale-110 group-hover:rotate-6"
                />

              </div>

              <span className="text-sm font-bold text-cyan-300">
                {skill.level}
              </span>

            </div>

            <div className="mt-6">

              <h3 className="text-lg font-semibold text-white">
                {skill.name}
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                {skill.category}
              </p>

              <div className="mt-5 h-2 w-full rounded-full bg-white/10 overflow-hidden">

                <div
                  className="h-full rounded-full bg-linear-to-r from-cyan-400 to-purple-500 transition-all duration-700"
                  style={{ width: skill.level }}
                />

              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Skills
