import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Pokemon from './Pokemon';
class PokemonsList extends Component {
    componentDidMount() {
        this.props.fetchPokemons();
    }

    render() {
        var { pokemons } = this.props;
        var img_id;
        var poke_images = [];
        var poke_total = pokemons.length;
        for (var i = 1; i <= poke_total; i++) {
            if (i < 10) img_id = `00${i}`;
            else if (i < 100) img_id = `0${i}`;
            else img_id = `${i}`;
            poke_images.push(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${img_id}.png`);
        }
        return (
            <div className="row">
                {this.showPoke(poke_images, pokemons)}  
            </div>
        );
    }
    showPoke = (poke_images, pokemons) => {
        var result = null;
        
        if (pokemons.length > 0) {
            result = poke_images.map((poke_image, index) => {
                return (
                    <Pokemon
                        poke={pokemons[index]}
                        poke_image={poke_image}
                        key={index}
                        id={index+1}
                    />
                );
            })
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        pokemons: state.pokemons
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchPokemons: () => {
            dispatch(actions.actFetchPokemonsRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList);