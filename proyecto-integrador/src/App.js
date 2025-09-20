import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import Detalle from "./screens/Detalle/Detalle";
import DetalleS from "./screens/DetalleS/DetalleS";
import Favoritos from "./screens/Favoritos/Favoritos";
import PeliculasPopulares from "./screens/PeliculasPopulares/PeliculasPopulares";
import PeliculasCartelera from "./screens/PeliculasCartelera/PeliculasCartelera";
import SeriesPopulares from "./screens/SeriesPopulares/SeriesPopulares";
import SeriesHoy from "./screens/SeriesHoy/SeriesHoy";
import Error from "./screens/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Buscador from "./components/Buscador/Buscador"

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/buscar/:valor" component={Buscador}/>
        <Route path="/detalle/pelicula/:id" component={Detalle} />
        <Route path="/detalle/series/:id" component={DetalleS} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/peliculasPopulares" component={PeliculasPopulares} />
        <Route path="/peliculasCartelera" component={PeliculasCartelera} />
        <Route path="/seriesPopulares" component={SeriesPopulares} />
        <Route path="/seriesHoy" component={SeriesHoy} />
        <Route component={Error} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
