import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { 
    registeredVotersReducer,itemEditReducer,itemsSortReducer,
    showIDFormReducer, showElectionListReducer, showBallotFormReducer, chooseElectionIdReducer, voterIdReducer
} from '../reducers/votingToolReducers';

import { 
    electionsReducer,errorMessageReducer,newQuestionReducer,electionNameReducer
} from '../reducers/electionToolReducer';

import thunk from 'redux-thunk';

export const votingToolStore = createStore(
    combineReducers({
        registeredVoters: registeredVotersReducer, //state.registeredVoters are the argument to the reducer
        itemEditId: itemEditReducer,
        itemsSort: itemsSortReducer,
        elections: electionsReducer,
        errorMessage: errorMessageReducer,
        questions: newQuestionReducer,
        errorMessage: errorMessageReducer,
        electionName:electionNameReducer,
        showIDForm: showIDFormReducer,
        showElectionList: showElectionListReducer,
        showBallotForm: showBallotFormReducer,
        elections: electionsReducer,
        chooseElectionId: chooseElectionIdReducer,
        voterId: voterIdReducer,
    }),
    applyMiddleware(thunk),
);

