import React, { Component } from "react";

class PeliculasPopulares extends Component{
    constructor(props){
        super(props);
        this.state = {
            populares: [],
            loading: true
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4cdaed34f087093d3046e41b43c08ddb')
        .then((response) => response.json())
        .then((data) =>{
            this.setState({populares: data.results, loading: false})
        })
        .catch((error) =>{
            console.log('Error');
            this.setState({ loading: false})
        })
    }

    render(){
        
        return(
            <React.Fragment>

            </React.Fragment>
        )
    }
       
}

export default PeliculasPopulares;