import { combineReducers } from 'redux';


function list(state=[],action){
	switch(action.type){
        case 'NEW_LIST':
           return action.data;
        default:  
           return state;
	}
}

export default combineReducers(
	{list }
);