import React from "react";
import HTML from "../img/HTML.png";
import CSS from "../img/Css.png"; 
import JavaScript from "../img/Js.png";  
import API from "../img/API.png";
import ASP_NET from "../img/ASP_Net.png";
import REACT from "../img/React.png";
import C_Scharp from "../img/C#.png";
import Chart_Js from "../img/chart_js.png";
import SEO from "../img/SEO.png";
import SQL from "../img/SQL.png";
import Bootstrap from "../img/bootstrap.png";
import GIT from "../img/git.png";

export default function Skills() {
  // Array de habilidades
  const skills = [
    {
      id: 1,
      name: "HTML",
      description: "Markup language used to structure web content.",
      image: HTML,
    },
    {
      id: 2,
      name: "CSS",
      description: "Style sheet language for styling web pages.",
      image: CSS,
    },
    {
      id: 3,
      name: "JavaScript",
      description: "Programming language for interactive web content.",
      image: JavaScript,
    },
    {
      id: 4,
      name: "API",
      description: "Set of tools for building software applications.",
      image: API,
    },
    {
      id: 5,
      name: "ASP.NET",
      description: "Web framework for building modern web apps.",
      image: ASP_NET,
    },
    {
      id: 6,
      name: "React",
      description: "JavaScript library for building user interfaces.",
      image: REACT,
    },
    {
      id: 7,
      name: "C#",
      description: "Programming language for backend and web development.",
      image: C_Scharp,
    },
    {
      id: 8,
      name: "Chart.js",
      description: "Library for creating interactive charts.",
      image: Chart_Js,
    },
    {
      id: 9,
      name: "SEO",
      description: "Techniques to optimize websites for search engines.",
      image: SEO,
    },
    {
      id: 10,
      name: "SQL",
      description: "Language for managing and querying relational databases.",
      image: SQL,
    },
    {
      id: 11,
      name: "Bootstrap",
      description: "Framework for building responsive web pages.",
      image: Bootstrap,
    },
    {
      id: 12,
      name: "Git",
      description: "Version control system for tracking changes in code.",
      image: GIT,
    },
  ];

  return (
    <section id="section_skills">
      <h2 id="h2_skills">Habilidades</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <img src={skill.image} className="skill-icon" alt={skill.name} />
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
