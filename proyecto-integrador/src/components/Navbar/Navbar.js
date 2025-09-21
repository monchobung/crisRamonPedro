import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import Buscador from '../Buscador/Buscador'

function Navbar(){
  return (
    <nav>
      {/* Logo */}
      <img 
        src="/cinetic.png" 
        alt="Logo UdeSA Movies" 
        className="logo"
      />

      {/* Contenedor de links + buscador */}
      <div className="nav">
        <ul>
          <li>
            <Link to="/">
            Home
            </Link>
            </li>
          <li>
          <Link to="/peliculasCartelera">
            Películas Cartelera
            </Link> 
            </li>
          <li>
          <Link to="/peliculasPopulares">
            Peliculas Populares
            </Link>
            </li>
            <li>
            <Link to="/seriesHoy">
            Series Hoy
            </Link> 
            </li>
          <li>
          <Link to="/seriesPopulares">
            Series Populares
            </Link>
            </li>
          <li>
          <Link to="/favoritos">
            Favoritos
            </Link>
            </li>
        </ul>

        <Buscador/>
      </div>
    </nav>
  );
}

export default Navbar;
