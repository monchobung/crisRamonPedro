import React, { Component } from "react";
import "./styles.css";
import PeliculaCard from "../../components/PeliculaCard/PeliculaCard";
import SerieCard from "../../components/SerieCard/SerieCard";

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
    const tipo = this.props.match.params.tipo
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2RhZWQzNGYwODcwOTNkMzA0NmU0MWI0M2MwOGRkYiIsIm5iZiI6MTc1NzY5NDU3MS44NjcsInN1YiI6IjY4YzQ0YTZiYzk1NzIxYzg4YWNkNTAwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4rp3hL4-IiU2FdzR0ITBAPwKfKFxhL4lXd-X6MzdlwQ'
        }
      };
      const query = this.props.match.params.query
    if (tipo === 'movie') {
        fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}`, options)
        .then(response => response.json())
        .then(data => this.setState({ data: data.results, tipo: 'movie'}, ()=> console.log(this.state.data)))
        .catch((error) =>{
            console.log('Error' + error);
            this.setState({ loading: false})
        })

    } else if (tipo === 'tv'){
        fetch(`https://api.themoviedb.org/3/search/tv?include_adult=false&language=en-US&page=1&query=${query}`, options)
        .then(response => response.json())
        .then(data => this.setState({data: data.results, tipo: 'tv'}, ()=> console.log(this.state.tipo)))
        .catch((error) =>{
            console.log('Error' + error);
            this.setState({ loading: false})
        })
    }
}

  render(){
    let tipo = this.props.match.params.tipo
    if(tipo === 'movie') {
        return(<React.Fragment>
            <h2>Resultados de Busqueda</h2>
            <div className="resultado-busqueda">
          {this.state.data.map((elm, idx) => (<PeliculaCard data={elm} key={idx + elm.id} />))}
        </div>
            </React.Fragment>)
    } else if (tipo === 'tv') {
        return(
            <React.Fragment>
            <h2>Resultados de Busqueda</h2>
            <div className="resultado-busqueda">
            {this.state.data.map((elm, idx) => (
            <SerieCard data={elm} key={idx + elm.id} />))}
        </div>
            </React.Fragment>
    )  
    }
    
  }
}

export default Busqueda
