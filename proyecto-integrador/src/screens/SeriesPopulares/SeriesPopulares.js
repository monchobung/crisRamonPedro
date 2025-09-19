import React, { Component } from "react";
import SerieCard from "../../components/SerieCard/SerieCard";
import './SeriesPopulares.css'


class SeriesPopulares extends Component{
    constructor(props){
        super(props);
        this.state = {
            populares: [],
            loading: true
        }
    }

    componentDidMount(){
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2RhZWQzNGYwODcwOTNkMzA0NmU0MWI0M2MwOGRkYiIsIm5iZiI6MTc1NzY5NDU3MS44NjcsInN1YiI6IjY4YzQ0YTZiYzk1NzIxYzg4YWNkNTAwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4rp3hL4-IiU2FdzR0ITBAPwKfKFxhL4lXd-X6MzdlwQ'
        }
      };
        fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
        .then((response) => response.json())
        .then((data) =>{
            this.setState({populares: data.results, loading: false})
        })
        .catch((error) =>{
            console.log('Error');
            this.setState({ loading: false})
        })
    }

    render() {
    return (
      <React.Fragment>
         <h2>Series Populares</h2>
        <div className="series-populares">
          {this.state.populares.map((elm, idx) => (
            <SerieCard data={elm} key={idx + elm.id} />
          ))}
        </div>
      </React.Fragment>
    );
  }
       
}

export default SeriesPopulares;