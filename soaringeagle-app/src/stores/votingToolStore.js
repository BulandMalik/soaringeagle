import { createStore, applyMiddleware } from 'redux';

import { votingToolReducer } from '../reducers/votingToolReducers';

import thunk from 'redux-thunk';

export const votingToolStore = createStore(
    votingToolReducer,
    applyMiddleware(thunk),
);