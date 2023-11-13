import React from "react";

function Item({name, isPacked}){
    let itemContent = name;
    if (isPacked){
        itemContent = (

            <del>
            {name + "✔"}
        </del>
        );
    }
    return(
        <li 
        className="item">
            {itemContent}
        </li>
    );
}
export default function PackingList(){
    return(
        <section id="Centralizado">
            <h1>Sally ride's Packing List</h1>
            <ul>
                <Item
                isPacked={true}
                name="Spacr suit"
                />
                <Item 
                isPacked={true}
                name="Helmet With a golden leaf"
                />
                <Item
                isPacked={false}
                name="Photo of Tam"
                />
            </ul>
        </section>
    )
}