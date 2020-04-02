import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Elementos
import { Link } from 'react-router-dom';
// Recursos
import noimage from '../assets/img/no-image.png';

export class Movie extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
  }

  render () {
    const { id, poster, title, year } = this.props

    return (
      <Link to={`/detail/${id}`} className="card">
        <div class="card card-cascade wider">
            <div class="view view-cascade overlay">
              <img alt={title} src={poster === 'N/A' ? noimage : poster} class="card-img-overlay" ></img>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <div class="card-body card-body-cascade text-center pb-0">
              <h4 class="card-title"><strong>{title}</strong></h4>
              <h5 class="blue-text pb-2"><strong>{year}</strong></h5>
            </div>
        </div>
      </Link>
    )
  }
}
