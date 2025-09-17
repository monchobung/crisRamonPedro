import React from 'react';
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
          <li><a href="/">Home</a></li>
          <li><a href="/peliculaspopulares">Películas populares</a></li>
          <li><a href="/peliculascartelera">Películas en cartelera</a></li>
          <li><a href="/favoritos">Favoritas</a></li>
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
