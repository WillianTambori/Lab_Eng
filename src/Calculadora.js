import React from "react";

export default function Calculadora({Na,Nb,Cal,Fim}){
    //const [Na, setNa] = useState(0);
    if(Nb === 0){
        return <p id="res" >{Na}</p>;
    }
    if(Cal !== 0){
        return <p id="res" >{Nb}</p>; 
    }
    if(Cal === "="){
        return <p id="res" >{Na}</p>;
        
    }

}
