import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';

class SerieCard extends Component {
  constructor (props){
    super(props)
    this.state={
      verMas: false,
      botonVerMas: "Ver mas",
      data: [],
      favorito: false
    }
  }

  componentDidMount() {
    const id = this.props.data.id;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2RhZWQzNGYwODcwOTNkMzA0NmU0MWI0M2MwOGRkYiIsIm5iZiI6MTc1NzY5NDU3MS44NjcsInN1YiI6IjY4YzQ0YTZiYzk1NzIxYzg4YWNkNTAwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4rp3hL4-IiU2FdzR0ITBAPwKfKFxhL4lXd-X6MzdlwQ'
      }
    };

    fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options)
      .then(res => res.json())
      .then(serie => {
        this.setState({ data: serie });

        const storage = localStorage.getItem('favoritosSeries');
        if (storage !== null) {
          let storageParseado = JSON.parse(storage);
          for (let i = 0; i < storageParseado.length; i++) {
            if (storageParseado[i] === serie.id) {
              this.setState({ favorito: true });
            }
          }
        }
      })
      .catch(err => console.error(err));
  }

  agregarAFavoritos(id) {
    let storage = localStorage.getItem('favoritosSeries');
    if (storage !== null) {
      let arrParseado = JSON.parse(storage);
      arrParseado.push(id);
      let arrStringificado = JSON.stringify(arrParseado);
      localStorage.setItem('favoritosSeries', arrStringificado);
    } else {
      let primerID = [id];
      let arrStringificado = JSON.stringify(primerID);
      localStorage.setItem('favoritosSeries', arrStringificado);
    }

    this.setState({
      favorito: true
    });
  }

  sacarDeFavoritos(id) {
    const storage = localStorage.getItem('favoritosSeries');
    const storageParseado = JSON.parse(storage);
    const filtrarStorage = storageParseado.filter(elm => elm !== id);
    const storageStringificado = JSON.stringify(filtrarStorage);
    localStorage.setItem('favoritosSeries', storageStringificado);
    this.setState({
      favorito: false
    })

    if(this.props.borrarDeCarrito !== undefined){
      this.props.borrarDeCarrito(id)
    }
  }

  botonVerMas(){
    if (this.state.verMas === false){
      this.setState({
        verMas:true,
        botonVerMas:"Ver menos"
      })
    }
    else{
      this.setState({
        verMas:false,
        botonVerMas:"Ver mas"
      })
    }
  }

  render(){
    return (
      <article className="single-card-movie">
        <div className="cardBody">
          <img className="col-md-6" src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`} alt="Imagen"/>
          <h5 className="card-title">{this.props.data.name}</h5>
          <div className="descripcion">
            {this.state.verMas===true ? <div><p className="card-text">{this.props.data.overview}</p></div>: ""}
            <button onClick={()=> this.botonVerMas()}>{this.state.botonVerMas}</button> 
          </div>
          <Link className="btn btn-primary" to={`/detalle/series/${this.props.data.id}`}>
            Ir a detalle
          </Link> 
          {
            this.state.favorito ? (
              <button onClick={() => this.sacarDeFavoritos(this.state.data.id)}>
                Quitar de favoritos
              </button>
            ) : (
              <button onClick={() => this.agregarAFavoritos(this.state.data.id)}>
                Agregar a favoritos
              </button>
            )
          }
        </div>
      </article>
    );
  }
}

export default SerieCard;
