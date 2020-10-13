import React, { Component } from 'react';
// Recursos
import logo from '../../assets/img/logo.png';
// Elementos
import { Link } from 'react-router-dom';
// Componentes
import { Title } from '../../components/Title';

export class NavBar extends Component {
  //----------------------------------------------------------------------//
  // Metodo Render                                                        //
  //----------------------------------------------------------------------//    
  render () {
    // Log de seguimiento
    console.log("Navbar.js - Metodo render");   
     
    return (
      <nav className="navbar navbar-dark blue-gradient fixed-top">
        <Link className="navbar-brand" to="/">
          <img src={logo} height="30" alt="logo React" className="logo"></img>
          <Title>Peliculas</Title> 
        </Link>
      </nav>
    )
  }
}
