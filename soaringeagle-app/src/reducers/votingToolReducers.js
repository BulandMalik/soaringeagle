import { 
    SORT_ITEMS_ACTION, CANCEL_ACTION, EDIT_ACTION,
    REFRESH_VOTERS_DONE_ACTION, REGISTER_VOTER_REQUEST_ACTION,
    REPLACE_VOTER_REQUEST_ACTION, DELETE_VOTER_REQUEST_ACTION,
} from '../actions/votersActions';

import { VERIFY_ACTION, START_VOTING_ACTION } from '../actions/ballotActions';
import { REFRESH_ELECTIONS_DONE_ACTION } from '../actions/electionToolActions';
import { 
    START_CHOOSE_ELECTION_ACTION, 
    CHOOSE_ELECTION_ACTION, 
    START_BALLOTING_ACTION,
    SET_CURRENT_VOTER_ACTION,
 } from '../actions/ballotActions';

import { combineReducers } from 'redux';

export const registeredVotersReducer = ( registeredVoters = [], action) => {

    //console.log("registeredVotersReducer::",registeredVoters, ", action::",action);
    switch (action.type) {
        case REFRESH_VOTERS_DONE_ACTION:
            return action.payload.registeredVoters;              
        default:
            return registeredVoters;            
    };
}

export const itemEditReducer = ( itemId = -1, action) => {

    console.log("itemEditReducer::",itemId, ", action::",action);
    switch (action.type) {
        case REGISTER_VOTER_REQUEST_ACTION:
        case REPLACE_VOTER_REQUEST_ACTION:
        case DELETE_VOTER_REQUEST_ACTION:
        case CANCEL_ACTION:
        {
            //console.log("itemEditReducer --> -1");
            return -1;
        }
        case EDIT_ACTION:
            return action.payload.voterId;
        default:
            return itemId;            
    };
}

export const itemsSortReducer = (  itemsSort = {sortCol: 'id', sortDir: 'asc'}, action) => {

    //console.log("itemsSortReducer::",action);
    //console.log("itemsSort B::",itemsSort);
    if (action.type === SORT_ITEMS_ACTION) {

        if (itemsSort.sortDir === 'asc') {
            return { ...itemsSort, sortCol: action.payload.sortCol, sortDir: 'desc'};
        } else {
                return { ...itemsSort, sortCol: action.payload.sortCol, sortDir: 'asc'};
        }
    }
    //console.log("itemsSort A::",itemsSort);
    return itemsSort;
}  

export const errorMessageReducer = (errorMessage = '', action) => {
    console.log("errorMessageReducer", action);
   
    if(action.type === VERIFY_ACTION && !action.payload.result) {
        return "User ID is NOT Valid !";
    }

    if(action.type === CHOOSE_ELECTION_ACTION && action.payload.electionId === -2){
        return "You already voted this election !"
    }
    
    return '';
}

export const showIDFormReducer = (showIDForm = false, action) => {
    console.log("!!showIDFormReducer", action)
    if(action.type === START_VOTING_ACTION && action.payload.showIDForm){
        return true;
    } else if(action.type === START_VOTING_ACTION){
        return false;
    }
    return showIDForm;
}

export const showBallotFormReducer = (showBallotForm = false, action) => {
    console.log("!showBallotFormReducer", action);
    if(action.type === START_BALLOTING_ACTION && action.payload.showBallotForm){
        return true;
    } else if(action.type === START_BALLOTING_ACTION){
        return false;
    }
    return showBallotForm;
}

export const showElectionListReducer = (showElectionList = false, action) => {
    console.log("!!showElectionListReducer", action);
    if(action.type === START_CHOOSE_ELECTION_ACTION && action.payload.showElectionList){
        return true;
    } else if(action.type === START_CHOOSE_ELECTION_ACTION){
        return false;
    }
    return showElectionList;
}

// ## need to update with election part
export const electionsReducer = (elections = [], action) => {
    console.log("!!electionsReducer", action)
    if(action.type === REFRESH_ELECTIONS_DONE_ACTION){
        return action.payload.elections;
    }
    return elections;
}

export const chooseElectionIdReducer = (electionId = -1, action) => {
    console.log("!!chooseElectionIdReducer", electionId);
    if(action.type === CHOOSE_ELECTION_ACTION){
        return action.payload.electionId;
    }
    return electionId;
}

export const voterIdReducer = (voterId = -1, action) => {
    console.log("!! voterIdReducer", voterId);
    if(action.type === SET_CURRENT_VOTER_ACTION){
        return action.payload.voterId;
    }
    return voterId;
}


export const votingToolReducer = combineReducers({
    registeredVoters: registeredVotersReducer, //state.registeredVoters are the argument to the reducer
    itemEditId: itemEditReducer,
    itemsSort: itemsSortReducer,
    errorMessage: errorMessageReducer,
    showIDForm: showIDFormReducer,
    showElectionList: showElectionListReducer,
    showBallotForm: showBallotFormReducer,
    elections: electionsReducer,
    chooseElectionId: chooseElectionIdReducer,
    voterId: voterIdReducer,
});