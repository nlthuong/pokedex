import React, { Component } from 'react';

import Pokemon from './Pokemon';
class PokemonsList extends Component {
    render() {
        var { pokemons } = this.props;
        return (
            <div className="row">
                {this.showPoke(pokemons)}  
            </div>
        );
    }
    showPoke = (pokemons) => {
        var result = null;
        if (pokemons.length > 0) {
            result = pokemons.map((pokemon, index) => {
                return (
                    <Pokemon
                        poke={pokemon}
                        key={index}
                    />
                );
            })
        }
        return result;
    }
}

export default PokemonsList;