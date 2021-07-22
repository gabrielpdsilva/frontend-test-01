import {ADD_GRAPHIC, EDIT_GRAPHIC, DELETE_GRAPHIC} from './action';

export function addGraphic(graphic) {
    return {
        type: ADD_GRAPHIC,
        payload: graphic
    }
}
