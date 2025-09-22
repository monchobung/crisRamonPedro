import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';

class PeliculaCard extends Component {
  constructor (props){
    super(props)
    this.state={
      vermas:false,
      textoboton: "ver mas"
    }
  }
  
  botonvermas(){
    if (this.state.vermas === false){
      this.setState({
        vermas:true,
        textoboton:"ver menos"
      })
    }
    else{
      this.setState({
        vermas:false,
        textoboton:"ver mas"
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
        {this.state.vermas===true ? <div><p className="card-text">{this.props.data.overview}</p></div>: ""}
        <button onClick={()=> this.botonvermas()}>{this.state.textoboton}</button> 
        </div>
        <Link className="btn btn-primary" to={`/detalle/pelicula/${this.props.data.id}`}>
          Ir a detalle
        </Link> 
      </div>
    </article>
  );
    }}

export default PeliculaCard;