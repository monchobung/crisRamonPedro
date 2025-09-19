import React, { Component } from "react";
import PeliculaCard from "../../components/PeliculaCard/PeliculaCard";
import './styles.css'

class PeliculasCartelera extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartelera: [],
            loading: true,
            filtadoValue: '',
            peliculasFiltradas: [],
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
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then((response) => response.json())
        .then((data) =>{
            this.setState({cartelera: data.results, loading: false, peliculasFiltradas: data.results})
        })
        .catch((error) =>{
            console.log('Error');
            this.setState({ loading: false})
        })
    }

    evitarSubmit(event){
        event.preventDefault()
    }

    controlarCambios(event){
        this.setState({filtadoValue: event.target.value}, ()=> this.filtarPeliculas(this.state.filtadoValue)
        )
    }

    filtarPeliculas(texto){
        let nuevoArray = this.state.cartelera.filter(elemento => {
          return  elemento.original_title.toLowerCase().includes(texto.toLowerCase())
        })

        this.setState({
            peliculasFiltradas: nuevoArray
        })
        console.log(this.state.peliculasFiltradas);
        
    }

    render(){
        
        
        return(
            <React.Fragment>
            <h2>Peliculas en Cartelera</h2>
            <form onSubmit={(event) => event.preventDefault()}>
            <input type="text" placeholder="Filtrar peliculas" value={this.state.filtadoValue} onChange={(event) => this.controlarCambios(event)}/>
            </form>
            <div className="peliculas-cartelera">
            {this.state.loading ? (
                <p className="loading">Cargando...</p>
         ) : (
            (this.state.peliculasFiltradas.map((elm, idx) => (
            <PeliculaCard data={elm} key={idx + elm.id} />
          ))))}
        </div> 
            </React.Fragment>
        )
    }
       
}

export default PeliculasCartelera;