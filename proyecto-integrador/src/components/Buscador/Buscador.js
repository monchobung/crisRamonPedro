import React, { Component } from 'react';
import './Buscador.css'; 
import { withRouter } from 'react-router-dom'

class Buscador extends Component {
    constructor (props){
        super(props)
        this.state={
            valor: '',
            tipo: 'movie'
        }

  }


ejecutarBusqueda(event){
    event.preventDefault();
    this.props.history.push("/search/" + this.state.tipo + "/" + this.state.valor)
}

controlarCambios(event){
    this.setState({valor: event.target.value},()=>console.log(this.state.valor));
  }

cambiarTipo(event){
    const value = event.target.value;
    if (value === 'movie') {
        this.setState({tipo: 'movie'}, ()=> console.log(this.state.tipo))
        
    } else if (value === 'tv'){
        this.setState({tipo: 'tv'}, ()=> console.log(this.state.tipo))
    }
}

  render(){
  return (
    <React.Fragment>
      <form className="search-form" onSubmit={(event)=> this.ejecutarBusqueda(event)}>
        <label>Name:</label>
        <input type="text" name="searchData" placeholder="Buscar..." onChange={(event)=> this.controlarCambios(event)} value={this.state.valor}/> 
        <label>Movie</label>
        <input className="" value="movie" type="radio" name="tipo" onChange={(event)=> this.cambiarTipo(event)} defaultChecked/>
        <label>Tv Series</label>
        <input className="" value="tv" type="radio" name="tipo" onChange={(event)=> this.cambiarTipo(event)}/>
        <button type='submit' className="btn btn-success btn-sm">Buscar</button>
      </form>
  </React.Fragment>
)}}

export default withRouter(Buscador)