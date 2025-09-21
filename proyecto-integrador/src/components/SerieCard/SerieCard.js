import React from 'react';
import { Link } from 'react-router-dom';

function SerieCard(props){
  const data = props.data;

  return (
    <article className="single-card-tv">
      <div className="cardBody">
      <img className="col-md-6" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="Imagen"/>
        <h5 className="card-title">{data.original_name}</h5>
        <p className="card-text">{data.overview}</p>
        <Link className="btn btn-primary" to={`/detalle/series/${data.id}`}>
          Ir a detalle
        </Link>
        
      </div>
    </article>
  );
}

export default SerieCard;