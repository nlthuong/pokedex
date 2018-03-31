import React, { Component } from 'react';
import './App.css';
import image_header from './images/pokemon-header.jpg';

// import components
import PokemonsList from './components/PokemonsList';
class App extends Component {
    render() {
        return (
            <div className="App container">
                <section className="header">
                    <div className="page-header">
                      <h1>Kanto Pokedex</h1>
                      <img src={image_header} className="img-responsive" alt="Header" />
                    </div>
                </section>
                <section className="pokedex-results">
                    <PokemonsList />
                </section>
            </div>
        );
    }
}

export default App;
