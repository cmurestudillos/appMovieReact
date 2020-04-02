import React from 'react';
// Componentes
import { BotonVolver } from '../components/BotonVolver';

export const NotFound = () => (
  <div className="notFound">
    <h1 className='title'>404!</h1>
    <h2 className='subtitle'>No existe la página</h2>
    <BotonVolver />
  </div>
)
