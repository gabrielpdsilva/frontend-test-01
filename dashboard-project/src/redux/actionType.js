import {ADD_GRAPHIC, EDIT_GRAPHIC, DELETE_GRAPHIC} from './action';

export function addGraphic(graphic) {
    return {
        type: ADD_GRAPHIC,
        payload: graphic
    }
}

export function editGraphic(graphic, index) {
    return {
        type: EDIT_GRAPHIC,
        payload: {
            graphic: graphic,
            index: index
        }
    }
}

export function deleteGraphic(graphicIndex) {
    return {
        type: DELETE_GRAPHIC,
        payload: graphicIndex
    }
}
