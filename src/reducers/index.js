import { combineReducers } from 'redux';
import pokemons from './pokemons_reducer';

const appReducers = combineReducers({
    pokemons
})

export default appReducers;