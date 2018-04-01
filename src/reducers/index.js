import { combineReducers } from 'redux';
import pokemons from './pokemons_reducer';
import isloading from './isloading_reducer';

const appReducers = combineReducers({
    pokemons,
    isloading
})

export default appReducers;