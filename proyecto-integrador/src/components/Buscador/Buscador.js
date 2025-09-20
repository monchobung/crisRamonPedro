import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'


class Buscador extends Component {
    constructor (props){
        super(props)
        this.state={
            valor: ''
        }

  }


ejecutarBusqueda(event){
    event.preventDefault();
    this.props.history.push("/buscar/" + this.state.valor)
}

controlarCambios(event){
    this.setState({valor: event.target.value},()=>console.log(this.state.valor));
  }

  render(){
  return (
    <React.Fragment>
      <form className="search-form" onSubmit={(event)=> this.ejecutarBusqueda(event)}>
        <label>Name:</label>
        <input type="text" name="searchData" placeholder="Buscar..." onChange={(event)=> this.controlarCambios(event)} value={this.state.valor}/>
        <button type='submit' className="btn btn-success btn-sm">Buscar</button>
      </form>
  </React.Fragment>
)}}

export default withRouter(Buscador)