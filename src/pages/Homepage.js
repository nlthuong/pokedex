import React, { Component } from 'react';
import image_header from '../images/pokemon-header.jpg';

// import components
import PokemonsList from '../components/PokemonsList';
import NextButton from '../components/NextButton';
class Homepage extends Component {
    render() {
        return (
            <div className="container">
                <section className="header">
                    <div className="page-header">
                        <h1>Kanto Pokedex</h1>
                        <img src={image_header} className="img-responsive" alt="Header" />
                    </div>
                </section>
                <section className="pokedex-results">
                    <PokemonsList />
                </section>
                <NextButton />
            </div>


        );
    }
}

export default Homepage;