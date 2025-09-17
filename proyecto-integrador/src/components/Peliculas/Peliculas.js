import React, { Component } from 'react'; 

class Peliculas extends Component {
    constructor (props){
        super(props)
        this.state = {

        }
    }

componentDidMount(){
    fetch('')
        .then((response) => response.json())
        .then(data => console.log(data))
        .catch(error => {
          console.log('El error fue ' + error);
        })
      }

    render(){

    }
}

export default Peliculas