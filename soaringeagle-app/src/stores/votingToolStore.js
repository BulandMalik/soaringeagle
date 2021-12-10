import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { 
    registeredVotersReducer,itemEditReducer,itemsSortReducer,
} from '../reducers/votingToolReducers';

import { 
    electionsReducer,errorMessageReducer,newQuestionReducer,
} from '../reducers/electionToolReducer';

import thunk from 'redux-thunk';

export const votingToolStore = createStore(
    combineReducers({
        registeredVoters: registeredVotersReducer, //state.registeredVoters are the argument to the reducer
        itemEditId: itemEditReducer,
        itemsSort: itemsSortReducer,
        elections: electionsReducer,
        errorMessage: errorMessageReducer,
        questions: newQuestionReducer
    }),
    applyMiddleware(thunk),
);

