import React, { Component } from "react";
import SerieCard from "../../components/SerieCard/SerieCard";
import './SeriesHoy.css'

class SeriesHoy extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartelera: [],
            loading: true
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=4cdaed34f087093d3046e41b43c08ddb')
        .then((response) => response.json())
        .then((data) =>{
            this.setState({cartelera: data.results, loading: false})
        })
        .catch((error) =>{
            console.log('Error');
            this.setState({ loading: false})
        })
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
            </React.Fragment>
        )
    }
       
}

export default SeriesHoy;