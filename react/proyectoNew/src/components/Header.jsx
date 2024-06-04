import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => (
  <header>
    <h1>HotelesWeb</h1>
    <nav>
      <ul>
        
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/contactanos">Contáctanos</Link></li>
        <li><Link to="/nosotros">Sobre nosotros</Link></li>
        <li className="botones-derecha">
          <Link to="/registroIngresar">Registrarse/Ingresar</Link>
          <Link to="/AdminPage">Admin</Link>
          </li>
      </ul>
      <form action="#" method="GET">
        <input type="text" name="q" placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </form>
    </nav>
  </header>
);

export default Header;
