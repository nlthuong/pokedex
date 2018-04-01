import * as types from '../constants/index';

const isloading = (state=true, action) => {
    switch(action.type){
        case types.TOGGLE_LOADING:
            return !state;

        default: return state;
    }
}

export default isloading