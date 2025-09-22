import React, { Component } from "react";
import SerieCard from "../../components/SerieCard/SerieCard";
import "./SeriesHoy.css";

class SeriesHoy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartelera: [],
      loading: true,
      filtadoValue: "",
      seriesFiltradas: [],
      pagina: 1,
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/tv/airing_today?api_key=4cdaed34f087093d3046e41b43c08ddb"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          cartelera: data.results,
          seriesFiltradas: data.results,
          loading: false,
          pagina: data.page,
        });
      })
      .catch((error) => {
        console.log("Error", error);
        this.setState({ loading: false });
      });
  }

  cargarMas() {
    const siguientePagina = this.state.pagina + 1;
    fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=4cdaed34f087093d3046e41b43c08ddb&page=${siguientePagina}`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          seriesFiltradas: this.state.seriesFiltradas.concat(data.results),
          pagina: data.page,
        })
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
    const nuevoArray = this.state.cartelera.filter((elemento) => elemento.original_name.toLowerCase().includes(texto.toLowerCase())
    );

    this.setState({seriesFiltradas: nuevoArray,});
  }

  render() {
    return (
      this.state.loading ? <h3>Cargando...</h3> :
      <React.Fragment>
        <h2>Series Transmitidas Hoy</h2>

        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            placeholder="Filtrar series"
            value={this.state.filtadoValue}
            onChange={(event) => this.controlarCambios(event)}/>
        </form>

        <div className="series-hoy">
          {this.state.seriesFiltradas.map((elm, idx) => ( <SerieCard data={elm} key={idx + elm.id} />))}
        </div>

        <button onClick={() => this.cargarMas()}>
          <p>Mas Series</p>
        </button>
      </React.Fragment>
    );
  }
}

export default SeriesHoy;
