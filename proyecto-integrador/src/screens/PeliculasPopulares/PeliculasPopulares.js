import React, { Component } from "react";
import './styles.css'
import PeliculaCard from "../../components/PeliculaCard/PeliculaCard";

class PeliculasPopulares extends Component{
    constructor(props){
        super(props);
        this.state = {
            populares: [],
            loading: true,
            filtadoValue: '',
            peliculasFiltradas: [],
            page: 1
        }
    }

    componentDidMount(){
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2RhZWQzNGYwODcwOTNkMzA0NmU0MWI0M2MwOGRkYiIsIm5iZiI6MTc1NzY5NDU3MS44NjcsInN1YiI6IjY4YzQ0YTZiYzk1NzIxYzg4YWNkNTAwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4rp3hL4-IiU2FdzR0ITBAPwKfKFxhL4lXd-X6MzdlwQ'
        }
      };
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, options)
        .then((response) => response.json())
        .then((data) =>{
            this.setState({populares: data.results, loading: false, peliculasFiltradas: data.results, page: data.page})
        })
        .catch((error) =>{
            console.log('Error');
            this.setState({ loading: false})
        })
    }

    cargarMas(){
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2RhZWQzNGYwODcwOTNkMzA0NmU0MWI0M2MwOGRkYiIsIm5iZiI6MTc1NzY5NDU3MS44NjcsInN1YiI6IjY4YzQ0YTZiYzk1NzIxYzg4YWNkNTAwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4rp3hL4-IiU2FdzR0ITBAPwKfKFxhL4lXd-X6MzdlwQ'
        }
      };
      let siguientePagina = this.state.page + 1
      fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${siguientePagina}`, options)
      .then(response => response.json())
      .then(data => this.setState({peliculasFiltradas:this.state.peliculasFiltradas.concat(data.results), page: data.page})
     )}

    evitarSubmit(event){
        event.preventDefault()
    }

    controlarCambios(event){
        this.setState({filtadoValue: event.target.value}, ()=> this.filtarPeliculas(this.state.filtadoValue)
        )
    }

    filtarPeliculas(texto){
        let nuevoArray = this.state.populares.filter(elemento => {
          return  elemento.original_name.toLowerCase().includes(texto.toLowerCase())
        })

        this.setState({
            peliculasFiltradas: nuevoArray
        })
        console.log(this.state.peliculasFiltradas);

    }

    render() {
      console.log(this.state.populares)
    return (
      <React.Fragment>
        <h2>Peliculas Populares</h2>
        <form onSubmit={(event) => event.preventDefault()}>
            <input type="text" placeholder="Filtrar peliculas" value={this.state.filtadoValue} onChange={(event) => this.controlarCambios(event)}/>
        </form>
        <div className="peliculas-populares">
          {this.state.peliculasFiltradas.map((elm, idx) => (<PeliculaCard data={elm} key={idx + elm.id} />))}
        </div>
        <button onClick={()=> this.cargarMas()}><p>Mas Peliculas</p></button> 
      </React.Fragment>
    );
  }

}

export default PeliculasPopulares;