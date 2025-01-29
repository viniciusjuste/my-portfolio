import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'; // Remova 'loops'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; 
import Finance from "../img/finance_dash.PNG";
import Agency from "../img/agency.PNG";

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
            title: 'Finance Dash',
            description: 'O FinanceDash é um projeto de dashboard financeiro interativo que visa facilitar a visualização e o gerenciamento de dados financeiros...',
            img: Finance,
            link: '#'
        },
        {
            title: 'Finance Dash',
            description: 'O FinanceDash é um projeto de dashboard financeiro interativo que visa facilitar a visualização e o gerenciamento de dados financeiros...',
            img: Finance,
            link: '#'
        },
        {
            title: 'Finance Dash',
            description: 'O FinanceDash é um projeto de dashboard financeiro interativo que visa facilitar a visualização e o gerenciamento de dados financeiros...',
            img: Finance,
            link: '#'
        },
        {
            title: 'Finance Dash',
            description: 'O FinanceDash é um projeto de dashboard financeiro interativo que visa facilitar a visualização e o gerenciamento de dados financeiros...',
            img: Finance,
            link: '#'
        },
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
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}  
                slidesPerView={'auto'}
                autoplay={{ delay: 2000, disableOnInteraction: false }} 
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination, Autoplay]}  // Inclua 'Autoplay' no array de modules
                className="mySwiper"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="card">
                            <img src={project.img} alt={project.title} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <button className="btn" onClick={() => window.open(project.link)}>Ver mais</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
