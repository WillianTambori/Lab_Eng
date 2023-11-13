import React from "react";
import Gallery from  './Gallery';
import TodoList from "./TodoList";
//import Avatar from "./Avatar";
import { Link} from "react-router-dom";
import PackingList from "./PackingList";
import List from "./List";
import { Recipe } from "./Recipe";

export default function Atv03(){
    return(
        <>
        <Gallery/>
        <TodoList />
        <PackingList/>
        <List/>
        <h2>for two</h2>
        <Recipe drinkers={2} />
        <h2>for a gather</h2>
        <Recipe drinkers={4} />

        <Link to="/">retorna a página principal</Link>
        </>
    );
}
