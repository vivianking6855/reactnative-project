import { combineReducers } from 'redux';
import {counter, counter1} from './counter';

const rootReducer = combineReducers({
    counter1,
    num: counter
});

export default rootReducer;