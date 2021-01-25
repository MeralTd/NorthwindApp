import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function categoryListReducer(state=initialState.categories, action){
    switch (action.type) {
        case actionTypes.GET_CATEGORY_SUCCESS:
            return action.payload    
        default:
            return state;
    }
}