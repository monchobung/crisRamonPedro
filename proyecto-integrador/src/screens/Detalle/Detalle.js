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

  componentDidMount(){
    const id = this.props.match.params.id;   
    const API_KEY = "4cdaed34f087093d3046e41b43c08ddb";         
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ item: data, loading: false }))
      .catch((error) => {
        console.log("Error", error);
        this.setState({ loading: false });
      });
  }

  render(){
    if (this.state.loading) {
      return <p>Cargando…</p>;
    }

    return (
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
