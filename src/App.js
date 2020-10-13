import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// Paginas
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { NotFound } from './pages/NotFound';
// Estilos
import './App.css';
// Componentes
import { Footer } from './components/shared/Footer';
import { NavBar } from './components/shared/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/detail/:movieId' component={Detail} />
            <Route component={NotFound} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
