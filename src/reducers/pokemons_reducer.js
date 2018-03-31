import * as types from '../constants/index';

const pokemons = (state=[], action) => {
    switch(action.type){
        case types.FETCH_POKEMON:
            
            return [...action.pokemons];

        default: return [...state];
    }
}

export default pokemons