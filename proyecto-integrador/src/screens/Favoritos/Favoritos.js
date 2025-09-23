import React, { Component } from 'react';
import PeliculaCard from '../../components/PeliculaCard/PeliculaCard';
import SerieCard from '../../components/SerieCard/SerieCard';
import "./styles.css"

export default class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculasFav: [],
      seriesFav: [],
      hayPeliculas: false,
      haySeries: false
    };
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer TU_TOKEN_V4'
      }
    };

    const favPeliculas = localStorage.getItem('favoritos');
    if (favPeliculas !== null) {
      let ids = JSON.parse(favPeliculas);
      if (ids.length > 0) {
        this.setState({ hayPeliculas: true });
        for (let i = 0; i < ids.length; i++) {
          fetch(`https://api.themoviedb.org/3/movie/${ids[i]}?language=en-US`, options)
            .then(res => res.json())
            .then(data => {
              let copia = this.state.peliculasFav;
              copia.push(data);
              this.setState({ peliculasFav: copia });
            })
            .catch(e => console.log(e));
        }
      }
    }

    const favSeries = localStorage.getItem('favoritosSeries');
    if (favSeries !== null) {
      let ids = JSON.parse(favSeries);
      if (ids.length > 0) {
        this.setState({ haySeries: true });
        for (let j = 0; j < ids.length; j++) {
          fetch(`https://api.themoviedb.org/3/tv/${ids[j]}?language=en-US`, options)
            .then(res => res.json())
            .then(data => {
              let copia = this.state.seriesFav;
              copia.push(data);
              this.setState({ seriesFav: copia });
            })
            .catch(e => console.log(e));
        }
      }
    }
  }

  filtrarPeliculas(id) {
    let filtradas = this.state.peliculasFav.filter(elm => elm.id !== id);
    this.setState({ peliculasFav: filtradas });
  }

  filtrarSeries(id) {
    let filtradas = this.state.seriesFav.filter(elm => elm.id !== id);
    this.setState({ seriesFav: filtradas });
  }

  render() {
    return (
      <div>
        <h2>Películas favoritas</h2>
        <div className='grilla-peliculas'>
        {
          this.state.peliculasFav.length > 0 ?
            this.state.peliculasFav.map((elm, idx) =>
              <PeliculaCard
                data={elm}
                key={idx + elm.id}
                borrarDeCarrito={(id) => this.filtrarPeliculas(id)}
              />
            )
            :
            this.state.hayPeliculas === false ?
              <h3>No tenés películas favoritas</h3>
              :
              <h3>Cargando películas...</h3>
        }
        </div>

        <h2>Series favoritas</h2>
        <div className='grilla-peliculas'>
        {
          this.state.seriesFav.length > 0 ?
            this.state.seriesFav.map((elm, idx) =>
              <SerieCard
                data={elm}
                key={idx + elm.id}
                borrarDeCarrito={(id) => this.filtrarSeries(id)}
              />
            )
            :
            this.state.haySeries === false ?
              <h3>No tenés series favoritas</h3>
              :
              <h3>Cargando series...</h3>
        }
        </div>
      </div>
    );
  }
}
