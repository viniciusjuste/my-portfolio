import React from "react";
import DowloadCV from "../js/dowloadCV";
import MaquinaDeEscrever from "./maquinaDeEscrever";
export default function Main() {
  
    return (
        <>
        <main>
           <h1 id="h1_main">
               <MaquinaDeEscrever text="Olá, meu nome é"/>
               <span id="span_main"> vinicius Juste</span>
           </h1>
           <p id="p_main">Desenvolvedor Front-End apaixonado por criar experiências digitais.</p>

           <div className="d_btn-main">
               <button className="btn_main" onClick={() => DowloadCV()}>Dowload CV</button>
               <button className="btn_main" id="btn_main_border"  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=viniciusjuste2019@gmail.com', '_blank')}>Entre em contato</button>
           </div>
        </main>
        </>
    );
}