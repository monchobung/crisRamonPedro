import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './Buscador.css'; 


class Buscador extends Component {
    constructor (props){
        super(props)
        this.state={
            valor: '',
            tipo: 'movie'
        }

  }


ejecutarBusqueda(event){
    event.preventDefault();
    this.props.history.push("/buscar/" + this.state.tipo + "/" + this.state.valor)
}

controlarCambios(event){
    this.setState({valor: event.target.value},()=>console.log(this.state.valor));
  }

cambiarTipo(event){
    const value = event.target.value;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2RhZWQzNGYwODcwOTNkMzA0NmU0MWI0M2MwOGRkYiIsIm5iZiI6MTc1NzY5NDU3MS44NjcsInN1YiI6IjY4YzQ0YTZiYzk1NzIxYzg4YWNkNTAwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4rp3hL4-IiU2FdzR0ITBAPwKfKFxhL4lXd-X6MzdlwQ'
        }
      };
    if (value === 'movie') {
        fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US', options)
        .then(response => response.json())
        .then(data => this.setState({tipo: 'movie'}, ()=> console.log(this.state.tipo)))
        
    } else if (value === 'tv'){
        this.setState({tipo: 'tv'}, ()=> console.log(this.state.tipo))
    }
}

  render(){
  return (
    <React.Fragment>
      <form className="search-form" onSubmit={(event)=> this.ejecutarBusqueda(event)}>
        <label>Name:</label>
        <input type="text" name="searchData" placeholder="Buscar..." onChange={(event)=> this.controlarCambios(event)} value={this.state.valor}/>
        <labe>Movie</labe>
        <input className="" value="movie" type="radio" name="tipo" onChange={(event)=> this.cambiarTipo(event)} defaultChecked/>
        <labe>Tv Series</labe>
        <input className="" value="tv" type="radio" name="tipo" onChange={(event)=> this.cambiarTipo(event)}/>
        <button type='submit' className="btn btn-success btn-sm">Buscar</button>
      </form>
  </React.Fragment>
)}}

export default withRouter(Buscador)