import React from "react";
const today = new Date();
const person = {
    name:'Gregorio Y. Zara',
    theme:{
        backgroundcolor: 'black',
        color:'pink',
        textAlign: 'center'
        
        
    }
};

export default function TodoList(){
    return(
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                className="avatar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="GRegorio Y. Zara"
            />  
            <ul>
                <li>improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>work on the alcohol-fulled engine</li>
                </ul>  

            <h1>To Do List for {formatDate(today)}</h1>
        </div>
    );
}

function formatDate(date){
    return new Intl.DateTimeFormat('en-US',{ weekday:'long'}).format(date);
}
 