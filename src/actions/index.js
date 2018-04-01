import * as types from '../constants/index';
import callApi from '../utils/callAPI';

export const actFetchPokemonsRequest = (start, end) => {

    return dispatch => {
        var pokemonRequests = [];
        for (var i = start; i <= end; i++) {
            pokemonRequests.push(callApi("/api/v2/pokemon/" + i));
        }
        Promise.all(pokemonRequests).then(responses => {
            var pokemons = responses.map(res => {
                var data = res.data;
                var img_id;
                if (data.id < 10) img_id = `00${data.id}`;
                else if (data.id < 100) img_id = `0${data.id}`;
                else img_id = `${data.id}`;
                var pokemon = {
                    name: data.name,
                    type: data.types,
                    id: data.id,
                    imgUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${img_id}.png`,
                    detailsUrl: "/pokemons/" + data.id
                };
                return pokemon;

            })
            dispatch(actFetchPokemon(pokemons));
            dispatch(actToggleLoading());
        })
        
    }
}

export const actFetchPokemon = (pokemons) => {
    return {
        type: types.FETCH_POKEMON,
        pokemons
    }
}

export const actToggleLoading = () => {
    return {
        type: types.TOGGLE_LOADING,
    }
}
