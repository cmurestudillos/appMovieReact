import React, { Component } from 'react';
// Componentes
import { SearchForm } from '../components/SearchForm';
import { MoviesList } from '../components/MoviesList';

export class Home extends Component {
  state = { usedSearch: false, results: [] }

  _handleResults = (results) => {
    this.setState({ results, usedSearch: true })
  }

  _renderResults () {
    return this.state.results.length === 0 ? 
      <div className="alert alert-warning" role="alert">
          <i className="fas fa-exclamation-triangle fa-2x"></i><strong> - No se han encontrado resultados. </strong>
      </div> : <MoviesList movies={this.state.results} />
  }
  //----------------------------------------------------------------------//
  // Metodo render                                                        //
  //----------------------------------------------------------------------//
  render () {
    // Log de seguimiento
    console.log("Home.js - Metodo render");   
     
    return (
      <div className="container">
        <div className='fixed-top'>
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch ? this._renderResults() : 
          <div className="alert alert-primary" role="alert">
            <i className="fas fa-info fa-2x"></i><strong> - Utiliza el buscador para encontrar tu pelicula. </strong>
          </div>}
      </div>
    )
  }
}
