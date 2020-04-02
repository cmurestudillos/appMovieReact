import React, { Component } from 'react';

//Constante
const API_KEY = '2c075e7b';

export class SearchForm extends Component {
  state = {
    inputMovie: ''
  }

  _handleChange = (e) => {
    this.setState({ inputMovie: e.target.value })
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    const { inputMovie } = this.state

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(results => {
        const { Search = [], totalResults = "0" } = results
        console.log({ Search, totalResults })
        this.props.onResults(Search)
      })
  }

  render () {
    return (
      <div className="float-right mt-3">
        <form onSubmit={this._handleSubmit} className="form-inline text-white">
          <div className="md-form my-0">
            <div className="control">
              <input className="form-control mr-sm-2 text-white" onChange={this._handleChange} type="text" placeholder="Busca la pelicula..." />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
