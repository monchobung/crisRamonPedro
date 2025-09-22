import React, { Component } from "react";
import SerieCard from "../../components/SerieCard/SerieCard";
import "./SeriesPopulares.css";

class SeriesPopulares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      populares: [],
      loading: true,
      filtadoValue: "",
      seriesFiltradas: [],
      page: 1,
    };
  }

  componentDidMount() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2RhZWQzNGYwODcwOTNkMzA0NmU0MWI0M2MwOGRkYiIsIm5iZiI6MTc1NzY5NDU3MS44NjcsInN1YiI6IjY4YzQ0YTZiYzk1NzIxYzg4YWNkNTAwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4rp3hL4-IiU2FdzR0ITBAPwKfKFxhL4lXd-X6MzdlwQ",
      },
    };

    fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", options)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          populares: data.results,
          seriesFiltradas: data.results,
          loading: false,
          page: data.page,
        });
      })
      .catch((error) => {
        console.log("Error", error);
        this.setState({ loading: false });
      });
  }

  cargarMas() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2RhZWQzNGYwODcwOTNkMzA0NmU0MWI0M2MwOGRkYiIsIm5iZiI6MTc1NzY5NDU3MS44NjcsInN1YiI6IjY4YzQ0YTZiYzk1NzIxYzg4YWNkNTAwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4rp3hL4-IiU2FdzR0ITBAPwKfKFxhL4lXd-X6MzdlwQ",
      },
    };
    const siguientePagina = this.state.page + 1;

    fetch(
      `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${siguientePagina}`,
      options
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({seriesFiltradas: this.state.seriesFiltradas.concat(data.results), page: data.page,})
      )
      .catch((error) => console.log("Error", error));
  }

  controlarCambios(event) {
    this.setState(
      { filtadoValue: event.target.value },
      () => this.filtarSeries(this.state.filtadoValue)
    );
  }

  filtarSeries(texto) {
    const nuevoArray = this.state.populares.filter((elemento) => elemento.original_name.toLowerCase().includes(texto.toLowerCase())
    );

    this.setState({ seriesFiltradas: nuevoArray });
  }

  render() {

    return (
      this.state.loading ? <h3>Cargando...</h3> :
      <React.Fragment>
        <h2>Series Populares</h2>

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Filtrar series"
            value={this.state.filtadoValue}
            onChange={(e) => this.controlarCambios(e)}
          />
        </form>

        <div className="series-populares">
          {this.state.seriesFiltradas.map((elm, idx) => (
            <SerieCard data={elm} key={idx + elm.id} />
          ))}
        </div>

        <button onClick={() => this.cargarMas()}>
          <p>Más Series</p>
        </button>
      </React.Fragment>
    );
  }
}

export default SeriesPopulares;
