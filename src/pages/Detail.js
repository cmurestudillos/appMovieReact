import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Componente
import { BotonVolver } from '../components/BotonVolver';
// API KEY
import OMDBKey from './../config/apikey';

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = { movie: {} }

  _fetchMovie ({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${OMDBKey.apiKey}&i=${id}`)
      .then(res => res.json())
      .then(movie => {
        console.log({ movie })
        this.setState({ movie })
      })
  }

  componentDidMount () {
    console.log(this.props)
    const { movieId } = this.props.match.params
    this._fetchMovie({ id: movieId })
  }

  //----------------------------------------------------------------------//
  // Metodo para generar datos aleatorios en la grafica                   //
  //----------------------------------------------------------------------//  
  render () {
    // Log de seguimiento
    console.log("Detail.js - Metodo render");

    const { Title, Poster, Actors, Metascore } = this.state.movie

    return (
      <div className="detalle">
        <h1>{Title}</h1>
        <img src={Poster} alt={Title} className="shadow p-3 mb-5 bg-white rounded" />
        <div>
          <p className="badge badge-pill blue-gradient">Puntuacion: {Metascore / 10}</p>
          <p><strong>Actores: </strong>{Actors}</p>
          <BotonVolver />
        </div>

      </div>
    )
  }
}
