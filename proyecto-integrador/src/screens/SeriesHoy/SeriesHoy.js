import React, { Component } from "react";
import SerieCard from "../../components/SerieCard/SerieCard";
import './SeriesHoy.css'

class SeriesHoy extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartelera: [],
            loading: true,
            pagina: 1
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=4cdaed34f087093d3046e41b43c08ddb')
        .then((response) => response.json())
        .then((data) =>{
            this.setState({cartelera: data.results, loading: false, pagina: data.page})
        })
        .catch((error) =>{
            console.log('Error');
            this.setState({ loading: false})
        })
    }

    cargarMas(){
    let siguientePagina = this.state.pagina + 1
    fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=4cdaed34f087093d3046e41b43c08ddb&page=${siguientePagina}`)
    .then(response => response.json())
    .then(data => this.setState({
        cartelera: this.state.cartelera.concat(data.results), 
        pagina: data.page
    }))
    .catch(error => console.log('Error', error))
}

    render(){
        
        
        return(
            <React.Fragment>
                <h2>Series Transmitidas Hoy</h2>
                <div className="series-hoy">
          {this.state.cartelera.map((elm, idx) => (
            <SerieCard data={elm} key={idx + elm.id} />
          ))}
        </div>
        <button onClick={()=> this.cargarMas()}><p>Mas Series</p></button>
            </React.Fragment>
        )
    }
       
}

export default SeriesHoy;