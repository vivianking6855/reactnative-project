/**
 * Created by Leo_Cao on 2016/7/22.
 */
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

export default function configureStore(initialState) {
    console.log('store---' + 'configureStore');
    const store = createStoreWithMiddleware(reducer, initialState);

    return store;
}
