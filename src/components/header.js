import React from "react";
import Logo from "../img/logo.png"
import Light_mode from "../img/light_mode.svg"
import Dark_mode from "../img/dark_mode.svg"


export default function Header() {
    return (
        <header>
            <div className="box1">
                <img src={Logo} alt="Logo da Página" id="logo" />
                <nav>
                    <a href="#">Página Inicial</a>
                    <a href="#">Sobre</a>
                    <a href="#">Projetos</a>
                    <a href="#">Habilidades</a>
                    <a href="#">Contato</a>

                    <button id="dark_mode"><img src={Light_mode} alt="Botão do modo claro"/></button>
                </nav>
            </div>
        </header>

    );
};