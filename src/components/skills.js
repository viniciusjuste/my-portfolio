import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';  
import 'swiper/css/autoplay'; 
import { EffectCards, Autoplay } from 'swiper/modules'; 
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
  const skills = [
    { id: 1, name: "HTML", description: "Linguagem de marcação usada para estruturar o conteúdo da web.", image: HTML },
    { id: 2, name: "CSS", description: "Linguagem de folha de estilo para estilizar páginas da web.", image: CSS },
    { id: 3, name: "JavaScript", description: "Linguagem de programação para conteúdo interativo da web.", image: JavaScript },
    { id: 4, name: "API", description: "Conjunto de ferramentas para construção de aplicativos de software.", image: API },
    { id: 5, name: "ASP.NET", description: "Estrutura da Web para construir aplicativos da Web modernos.", image: ASP_NET },
    { id: 6, name: "React", description: "Biblioteca JavaScript para construção de interfaces de usuário.", image: REACT },
    { id: 7, name: "C#", description: "Linguagem de programação para backend e desenvolvimento web.", image: C_Scharp },
    { id: 8, name: "Chart.js", description: "Biblioteca para criação de gráficos interativos.", image: Chart_Js },
    { id: 9, name: "SEO Básico", description: "Técnicas de otimização de sites para motores de busca.", image: SEO },
    { id: 10, name: "SQL", description: "Linguagem para gerenciamento e consulta de bancos de dados relacionais.", image: SQL },
    { id: 11, name: "Bootstrap", description: "Framework para construção de páginas web responsivas.", image: Bootstrap },
    { id: 12, name: "Git", description: "Sistema de controle de versão para rastrear alterações no código.", image: GIT },
  ];

  return (
    <section id="section_skills">
      <h2 id="h2_skills">Habilidades</h2>
      <div className="skills-container">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}  
          className="mySwiper"
          autoplay={{ delay: 2000, disableOnInteraction: false }} 
          loop={false}
        >
          {skills.map((skill) => (
            <SwiperSlide key={skill.id}>
              <div className="skill-card">
                <img src={skill.image} className="skill-icon" alt={skill.name} />
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
