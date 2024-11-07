import React, { useState } from "react";
import Logo from "../img/logo.png";
import Light_mode from "../img/light_mode.svg";
import Dark_mode from "../img/dark_mode.svg";

export default function Header() {
  // Estado para controlar a exibição do menu
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="box1">
        <img src={Logo} alt="Logo da Página" id="logo" />
        <nav className={`nav-menu ${isMenuVisible ? "show" : ""}`}>
          <a href="#">Página Inicial</a>
          <a href="#">Sobre</a>
          <a href="#">Projetos</a>
          <a href="#">Habilidades</a>
          <a href="#">Contato</a>
        </nav>
      </div>
    </header>
  );
}
