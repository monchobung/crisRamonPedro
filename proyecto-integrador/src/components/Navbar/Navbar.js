import React from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css';

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
            Películas en Cartelera
            </NavLink> 
            </li>
          <li>
          <NavLink to="/peliculasPopulares">
            Peliculas Populares
            </NavLink>
            </li>
            <li>
            <NavLink to="/seriesCartelera">
            Series en Cartelera
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

        <form className="search-form" action="results.html" method="get">
          <input type="text" name="searchData" placeholder="Buscar..." />
          <button type="submit" className="btn-sm">Buscar</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
