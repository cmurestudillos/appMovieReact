import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Componente
import { BotonVolver } from '../components/BotonVolver';

// Constante
const API_KEY = '2c075e7b';

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
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
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

  render () {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie

    return (
      <div className="detalle">
        <h1>{Title}</h1>
        <img src={Poster} alt={Title}/>
        <h4><strong>Actores:</strong> {Actors}</h4>
        <span class="badge badge-pill blue-gradient">Puntuacion: {Metascore}</span>
        <p><strong>Sinpsis:</strong> {Plot}</p>
        <BotonVolver />
      </div>
    )
  }
}
