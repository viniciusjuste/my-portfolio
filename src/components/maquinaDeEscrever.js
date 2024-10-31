import React, { useEffect, useState } from "react";
export default function MaquinaDeEscrever(props) {

    const [text, setText] = useState('')
    const [mostrarCursor, setMostrarCursor] = useState(false)

    const escreverNaTela = (text, i = 0) => {
        if (i < text.length) {
            setText(text.slice(0, i + 1))
            setTimeout(() => escreverNaTela(text, i + 1), 100);
        } else if(i> text.length && props?.esconderCursor){
            setMostrarCursor(false);
        }
    };

    useEffect(() => {
        setTimeout(() => escreverNaTela(props.text), props?.delay ?? 200);
    },[]);
    
    return (
        <>
        {text}
        {mostrarCursor && 
        <span className="cursor">|</span>
        }
        </>
    );
}