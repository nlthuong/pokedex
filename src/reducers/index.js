import { combineReducers } from 'redux';
import pokemons from './pokemons_reducer';
import next_list from './next_list_reducer';

const appReducers = combineReducers({
    pokemons,
    next_list
})

export default appReducers;