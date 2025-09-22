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
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2RhZWQzNGYwODcwOTNkMzA0NmU0MWI0M2MwOGRkYiIsIm5iZiI6MTc1NzY5NDU3MS44NjcsInN1YiI6IjY4YzQ0YTZiYzk1NzIxYzg4YWNkNTAwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4rp3hL4-IiU2FdzR0ITBAPwKfKFxhL4lXd-X6MzdlwQ'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((data) => this.setState({ item: data, loading: false }))
      .catch((error) => {
        console.log("Error", error);
        this.setState({ loading: false });
      });
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
