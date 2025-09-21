import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';

class PeliculaCard extends Component {
  constructor (props){
    super(props)
    this.state={
      verMas: false,
      botonVerMas: "Ver mas"
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
        <h5 className="card-title">{this.props.data.title}</h5>
        <div className="descripcion">
        {this.state.verMas===true ? <div><p className="card-text">{this.props.data.overview}</p></div>: ""}
        <button onClick={()=> this.botonVerMas()}>{this.state.botonVerMas}</button> 
        </div>
        <Link className="btn btn-primary" to={`/detalle/pelicula/${this.props.data.id}`}>
          Ir a detalle
        </Link> 
      </div>
    </article>
  );
    }}

export default PeliculaCard;