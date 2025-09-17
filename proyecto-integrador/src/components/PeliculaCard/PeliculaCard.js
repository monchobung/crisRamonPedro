import React from 'react';

function PeliculaCard(props){
  const data = props.data;

  return (
    <article className="single-card-movie">
      <div className="cardBody">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.overview}</p>
        <a className="btn btn-primary" href={"/detalle"}>Ver más</a> {/* por ahora no funca el link*/}
      </div>
    </article>
  );
}

export default PeliculaCard;