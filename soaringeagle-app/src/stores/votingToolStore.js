import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { 
    registeredVotersReducer,itemEditReducer,itemsSortReducer,
} from '../reducers/votingToolReducers';

import { 
    electionsReducer,editElectionIdReducer,newQuestionReducer,
} from '../reducers/electionToolReducer';

import thunk from 'redux-thunk';

export const votingToolStore = createStore(
    combineReducers({
        registeredVoters: registeredVotersReducer, //state.registeredVoters are the argument to the reducer
        itemEditId: itemEditReducer,
        itemsSort: itemsSortReducer,
        elections: electionsReducer,
        editElectionId: editElectionIdReducer,
        questions: newQuestionReducer
    }),
    applyMiddleware(thunk),
);

