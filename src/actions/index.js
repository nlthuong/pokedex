import * as types from '../constants/index';
import callApi from '../utils/callAPI';
export const actFetchPokemonsRequest = (url = 'https://pokeapi.co/api/v2/pokemon/') => {
    return dispatch => {
        callApi(url).then(res => {
            dispatch(actFetchPokemon(res.data.results));
            dispatch(actStoreNextList(res.data.next))
        })
    }
}

export const actFetchPokemon = (pokemons) => {
    return {
        type: types.FETCH_POKEMON,
        pokemons
    }
}

export const actStoreNextList = next_list => {
    return {
        type: types.NEXT_LIST,
        next_list
    }
}
export const actShowNextListRequest = next_list => {
    return dispatch => {
        dispatch(actFetchPokemonsRequest(next_list))
    }
}