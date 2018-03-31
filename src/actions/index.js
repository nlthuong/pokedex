import * as types from '../constants/index';
import axios from 'axios';
export const actFetchPokemonsRequest = () => {
    return dispatch => {
        var pokemonRequest = [];
        for (var i = 1; i < 7; i++) {
            pokemonRequest.push(axios({
                method: 'GET',
                url: `https://pokeapi.co/api/v2/pokemon/${i}`,
                data: null
            }))
        }
        Promise.all(pokemonRequest).then((responses) => {
            const dataArr = responses.map(r => r.data);
            dispatch(actFetchPokemon(dataArr));
        });
    }
}

export const actFetchPokemon = pokemons => {
    return {
        type: types.FETCH_POKEMON,
        pokemons
    }
}