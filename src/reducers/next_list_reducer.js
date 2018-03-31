import * as types from '../constants/index';

const next_list = (state='', action) => {
    switch(action.type){
        case types.NEXT_LIST:
            console.log(action.next_list)
            return action.next_list;

        default: return state;
    }
}

export default next_list