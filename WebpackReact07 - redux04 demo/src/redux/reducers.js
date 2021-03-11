import {ADD_COMMENT,DELETE_COMMENT,RECEIVE_COMMENT} from './action-types';
import {combineReducers} from 'redux';

const initComment =[]

function comments(state=initComment,action){
    switch(action.type){
        case ADD_COMMENT:
            return [action.data,...state]
        case DELETE_COMMENT:
            return state.filter((comment,index)=> index !== action.data);
        case RECEIVE_COMMENT:
            return action.data
        default:
            return state;
    }
}

export default combineReducers({
    comments
})