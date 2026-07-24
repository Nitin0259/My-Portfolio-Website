// Skill section logo
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

export const SkillsInfo = [
    {
        title: "Frontend",
        items: [
            { name: "HTML", icon: html },
            { name: "CSS", icon: css },
            { name: "JavaScript", icon: javascript },
            { name: "React", icon: react },
            { name: "Tailwind CSS", icon: tailwind },
            { name: "Bootstrap", icon: bootstrap },
        ],
    },
    {
        title: "Backend",
        items: [
            { name: "Python", icon: python },
            { name: "MySQL", icon: mysql },
        ],
    },
    {
        title: "Tools",
        items: [
            { name: "Git", icon: git },
            { name: "GitHub", icon: github },
            { name: "VS Code", icon: vscode },
            { name: "Figma", icon: figma },
        ],
    },
];
