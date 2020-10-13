import React, { Component } from 'react';

export class Footer extends Component {
  //----------------------------------------------------------------------//
  // Metodo Render                                                        //
  //----------------------------------------------------------------------//   
  render () {
    // Log de seguimiento
    console.log("Footer.js - Metodo render"); 

    return (
      <div>
        <footer>
            <div className="footer-copyright text-center fixed-bottom py-3 blue-gradient">
              <i>© 2020 Copyright - Carlos Mur</i>
            </div>
        </footer>
      </div>
    )
  }
}
