import * as types from '../constants/index';

const pokemons = (state=[], action) => {
    switch(action.type){
        case types.FETCH_POKEMON:
            state = state.concat(action.pokemons)
            return [...state];

        default: return [...state];
    }
}

export default pokemons