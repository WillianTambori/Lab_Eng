import React from "react";
import A from "./img/A.png";
import B from "./img/B.png";
import C from "./img/C.png";
import D from "./img/D.png";
import E from "./img/E.png";
import F from "./img/F.png";
import G from "./img/G.png";
import H from "./img/H.png";
import I from "./img/I.png";


export default function Card({imagem,id,onClick}){
    const imagens=[A,B,C,D,E,F,G,H,I];
    let numero = imagem;
    return(
        <>
            <img src={imagens[numero]} id={id} onClick={onClick}/>
        </>
    )
}