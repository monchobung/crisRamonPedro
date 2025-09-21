import React from 'react';
import { NavLink } from "react-router-dom";
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
            <NavLink to="/">
            Home
            </NavLink>
            </li>
          <li>
          <NavLink to="/peliculasCartelera">
            Películas Cartelera
            </NavLink> 
            </li>
          <li>
          <NavLink to="/peliculasPopulares">
            Peliculas Populares
            </NavLink>
            </li>
            <li>
            <NavLink to="/seriesHoy">
            Series Hoy
            </NavLink> 
            </li>
          <li>
          <NavLink to="/seriesPopulares">
            Series Populares
            </NavLink>
            </li>
          <li>
          <NavLink to="/favoritos">
            Favoritos
            </NavLink>
            </li>
        </ul>

        <Buscador/>
      </div>
    </nav>
  );
}

export default Navbar;
