import React, { Component } from "react";
import "./styles.css";

class Detalle extends Component {
  constructor(props){
    super(props);
    this.state = {
      item: {},
      loading: true
    };
    }

  

  render(){
    return (
      this.state.loading ? <h3>Cargando...</h3> :
      <article className="detalle">
        <h2>{this.state.item.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500${this.state.item.poster_path}`} alt='imagen' />
        <p>Calificación: {this.state.item.vote_average}</p>
        <p>Fecha de estreno: {this.state.item.release_date}</p>
        <p>Duración: {this.state.item.runtime} min</p>
        <p>Sinopsis: {this.state.item.overview}</p>
      </article>
    );
  }
}

export default Detalle;
