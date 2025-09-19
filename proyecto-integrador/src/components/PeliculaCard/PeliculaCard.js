import React from 'react';
import { Link } from 'react-router-dom';

function PeliculaCard(props){
  const data = props.data;
  
  return (
    <article className="single-card-movie">
      <div className="cardBody">
      <img className="col-md-6" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="Imagen"/>
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.overview}</p>
        <Link className="btn btn-primary" to={`/detalle/pelicula/${data.id}`}>
          Ver más
        </Link> {/* por ahora no funca el link*/}
      </div>
    </article>
  );
}

export default PeliculaCard;