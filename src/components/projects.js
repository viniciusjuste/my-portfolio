import React from "react";
import { useState } from "react";
import Finance from "../img/finance_dash.PNG"
import Agency from "../img/agency.PNG"

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            title: 'Finance Dash',
            description: 'O FinanceDash é um projeto de dashboard financeiro interativo que visa facilitar a visualização e o gerenciamento de dados financeiros...',
            img: Finance,
            link: '#'
        },
        {
            title: 'Agência de Marketing',
            description: 'O projeto da agência de marketing digital foi desenvolvido com o objetivo de criar uma presença online impactante...',
            img: Agency,
            link: 'https://viniciusjuste.github.io/landing-page-agency/'
        }
    ];

    const nextSlide = () => setCurrentIndex((currentIndex + 1) % projects.length);
    const prevSlide = () => setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);

    return (
        <section id="section_projects">
            <h2 id="h2_projects">Projetos</h2>
            <h3 id="h3_projects">Destaques</h3>
            <div className="carousel-container">
                <button onClick={prevSlide} className="carousel-btn prev">❮</button>
                
                {projects.map((project, index) => (
                    <div className={`card ${index === currentIndex ? 'active' : 'inactive'}`} key={index}>
                        <img src={project.img} alt={project.title} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                            <button className="btn" onClick={() => window.open(project.link)}>Ver mais</button>
                        </div>
                    </div>
                ))}
                
                <button onClick={nextSlide} className="carousel-btn next">❯</button>
            </div>
        </section>
    );
}

