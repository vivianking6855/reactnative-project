import {ADD_ITEM, MINUS_ITEM} from '../action/action';

export function counter(state = 0, action) {
    console.log('reduce fuction...');
    switch (action.type) {
        case ADD_ITEM:
            return state + 1;
        case MINUS_ITEM:
            return state - 1;
        default:
            return state;
    }
}

export function counter1(state = 0, action) {
    console.log('reduce fuction1...');


    switch (action.type) {
        case ADD_ITEM:
            return state + 4;
        default:
            return state;
    }

}