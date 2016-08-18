export const ADD_ITEM = 'ADD_ITEM';
export const MINUS_ITEM = 'MINUS_ITEM';


export function addItem() {
    console.log('action--' + 'addItem');
    return {
        type: ADD_ITEM,
    }
}

export function minusItem() {
    return {
        type: MINUS_ITEM,
    }
}