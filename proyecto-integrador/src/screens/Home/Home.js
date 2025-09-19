import React from "react"
import { Component } from "react";
import { Link } from 'react-router-dom'
import "./styles.css"
import PeliculaCard from "../../components/PeliculaCard/PeliculaCard";



class Home extends Component {
    constructor (props){
        super(props)
        this.state={
            populares: [],
            datos: [],
            loading: true
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
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            let peliculasReducidas = data.results.filter((nuevas, i) => i < 4)
            this.setState({populares: peliculasReducidas, loading: false})
        })
        .catch((error) =>{
            console.log('Error' + error);
            this.setState({ loading: false})
        })
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            this.setState({cartelera: data.results, loading: false})
        })
        .catch((error) =>{
            console.log('Error');
            this.setState({ loading: false})
        })
    }

    render(){
    return(
        <React.Fragment>
        <h1>Bienvenidos a Cinetic</h1>
        <div>
        <h2 className="alert alert-primary">Popular movies this week</h2>
        <Link to="/peliculasPopulares">Ver Todas</Link>
        </div>
            <section className="row cards" id="movies">
                {this.state.populares.map((elm, idx) => 
                    (<PeliculaCard data={elm} key={idx + elm.id} />))} 
            </section>
        <h2 className="alert alert-primary">Movies now playing</h2>
            <section className="row cards" id="now-playing">
            </section>
        <h2 className="alert alert-warning">Popular TV shows this week</h2>
            <section className="row cards" id="tv-show">
            </section>
        <h2 className="alert alert-warning">TV shows airing today</h2>
        <section className="row cards" id="on-air-today">
        </section>
        </React.Fragment>
    )
}
}

export default Home;