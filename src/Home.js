import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return (
        <div>
            <h1>Págima Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01">Atividade1</Link>
                    </li>
                    <li>
                        <Link to="/Atv02">Atividade02</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;