import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import Detalle from "./screens/Detalle/Detalle";
import Favoritos from "./screens/Favoritos/Favoritos";
import Series from "./screens/Series/Series";
import Peliculas from "./screens/Peliculas/Peliculas";
import PeliculasPopulares from "./screens/PeliculasPopulares/PeliculasPopulares";
import PeliculasCartelera from "./screens/PeliculasCartelera/PeliculasCartelera";
import SeriesPopulares from "./screens/SeriesPopulares/SeriesPopulares";
import SeriesHoy from "./screens/SeriesHoy/SeriesHoy";
import Error from "./screens/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detalle/pelicula/:id" component={Detalle} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/peliculas" component={Peliculas} />
        <Route path="/series" component={Series} />
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
