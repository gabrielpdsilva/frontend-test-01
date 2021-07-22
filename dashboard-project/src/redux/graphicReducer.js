import {ADD_GRAPHIC, EDIT_GRAPHIC, DELETE_GRAPHIC} from './action';

const initialState = {
    graphics: []
};

export function graphicReducer(state = initialState, action) {
    
    if(action.type == ADD_GRAPHIC) {
        return {
            graphics: [...state.graphics, action.payload]
        }
    }

    return state;

}
