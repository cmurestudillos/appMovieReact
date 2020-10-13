import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Componentes
import { Movie } from './Movie';

export class MoviesList extends Component {
  static propTypes = {
    movies: PropTypes.array
  }

  //----------------------------------------------------------------------//
  // Metodo render                                                        //
  //----------------------------------------------------------------------//
  render () {
    // Log de seguimiento
    console.log("MovieList.js - Metodo render"); 

    const { movies } = this.props
    return (
      <div className="card-columns">
        {movies.map(movie => {
            return (
              <div key={movie.imdbID} className='card'>
                <Movie id={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} />
              </div>
            )
          })
        }
      </div>
    )
  }
}
