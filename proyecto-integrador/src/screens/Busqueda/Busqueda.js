import React, { Component } from "react";
import "./styles.css";
import PeliculaCard from "../../components/PeliculaCard/PeliculaCard";
//import SerieCard from "../../components/SerieCard/SerieCard";

class Busqueda extends Component {
    constructor (props){
        super(props)
        this.state={
            valor: '',
            data: [],
            tipo: 'movie'
        }

  }

  componentDidMount(){
    let tipo = this.props.match.params.tipo
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2RhZWQzNGYwODcwOTNkMzA0NmU0MWI0M2MwOGRkYiIsIm5iZiI6MTc1NzY5NDU3MS44NjcsInN1YiI6IjY4YzQ0YTZiYzk1NzIxYzg4YWNkNTAwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4rp3hL4-IiU2FdzR0ITBAPwKfKFxhL4lXd-X6MzdlwQ'
        }
      };
      let query = this.props.match.params.query
    if (tipo === 'movie') {
        fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}`, options)
        .then(response => response.json())
        .then(data => this.setState({ data: data.results, tipo: 'movie'}, ()=> console.log(this.state.tipo)))

    } else if (tipo === 'tv'){
        fetch(`https://api.themoviedb.org/3/search/tv?include_adult=false&language=en-US&page=1&query=${query}`, options)
        .then(response => response.json())
        .then(data => this.setState({data: data.results, tipo: 'tv'}, ()=> console.log(this.state.tipo)))
    }
}

  render(){
    
    return(
            <React.Fragment>
            <h2>Resultados de Busqueda</h2>
            <div className="resultado-busqueda">
          {this.state.data.map((elm, idx) =>(<PeliculaCard data={elm} key={idx + elm.id} />))}
        </div>
            </React.Fragment>
    )  
  }
}

export default Busqueda
