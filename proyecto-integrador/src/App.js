import { Route, Switch } from "react-router-dom"
import Home from "./screens/Home/Home"
import Detalle from "./screens/Detalle/Detalle"
import Favoritos from "./screens/Favoritos/Favoritos"
import Series from "./screens/Series/Series"
import Peliculas from "./screens/Peliculas/Peliculas"
import PeliculasPopulares from "./screens/PeliculasPopulares/PeliculasPopulares"
import PeliculasCartelera from "./screens/PeliculasCartelera/PeliculasCartelera"
import Error from "./screens/Error/Error"

function App() {
  return (
    <Switch>
      <Route path='/' exact={true} component={Home}/>
      <Route path='/detalle' component={Detalle}/>
      <Route path='/favoritos' component={Favoritos}/>
      <Route path='/peliculas' component={Peliculas}/>
      <Route path='/series' component={Series}/>
      <Route path="/peliculaspopulares" component={PeliculasPopulares}/>
      <Route path="/peliculascartelera" component={PeliculasCartelera}/>
      <Route path="" component={Error}/>
    </Switch>
  );
}

export default App;
