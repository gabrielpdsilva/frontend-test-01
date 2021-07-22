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

    if(action.type == EDIT_GRAPHIC) {
        const updatedGraphics = [...state.graphics];
        updatedGraphics[action.payload.index] = action.payload.graphic;
        return {
            ...state,
            graphics: updatedGraphics
        }
    }

    if(action.type == DELETE_GRAPHIC) {
        return {
            ...state,
            graphics: state.graphics.filter((graphic, index) => index !== action.payload)
        }
    }

    return state;

}
