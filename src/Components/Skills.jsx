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
  const skillItems = [
    {
      title: "Frontend",
      items: [
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "JavaScript", icon: javascript },
        { name: "React", icon: react },
        { name: "Tailwind CSS", icon: tailwind },
        { name: "Bootstrap", icon: bootstrap },
        { name: "JQuery", icon: jquery }
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Python", icon: python },
        { name: "Django", icon: django },
        { name: "MySQL", icon: mysql },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", icon: git },
        { name: "Render", icon: render },
        { name: "GitHub", icon: github },
        { name: "VS Code", icon: vscode },
        { name: "Figma", icon: figma },
      ],
    },
  ]
  return (
    <section id='Skills' className='min-h-screen py-16 px-4 text-white sm:px-6 lg:px-10'>
      {/* Header-part */}
      <div className="text-center mb-10">
        <h2 className="text-xxl sm:text-2xl lg:text-3xl font-extrabold tracking-normal">
          My Skills
        </h2>
        <div className="mt-3 h-1 w-14 mx-auto rounded-full bg-linear-to-r from-cyan-400 to-purple-500"></div>
        <h3 className='mt-4 text-md sm:text-base font-bold text-gray-400'>Technologies I work with</h3>
      </div>

      <div className='flex flex-col '>

      </div>
    </section>
  )
}

export default Skills
