import React from 'react';
import './navbar.css';

function Navbar(){
  return (
    <nav>
      <img src="/cinetic.png" alt="Logo" className="logo"/>

      <ul className="nav nav-tabs my-4">
        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="/peliculaspopulares">Películas populares</a></li>
        <li className="nav-item"><a className="nav-link" href="/peliculascartelera">Películas en cartelera</a></li>
        <li className="nav-item"><a className="nav-link" href="/favoritos">Favoritas</a></li>
      </ul>

      <form className="search-form" action="results.html" method="get">
        <input type="text" name="searchData" placeholder="Buscar..." />
        <button type="submit" className="btn btn-success btn-sm">Buscar</button>
      </form>
    </nav>
  );
}

export default Navbar;
