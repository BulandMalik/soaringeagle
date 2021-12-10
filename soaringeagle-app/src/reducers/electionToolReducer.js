import { combineReducers } from "redux";
import { SORT_ASC, SORT_DESC } from '../selectors/itemToolSelectors';

import {
    ADD_ELECTION_ACTION,
	ERROR_MESSAGE_ACTION,

	NEW_QUESTION_ACTION,

    REFRESH_ELECTIONS_DONE_ACTION
} from "../actions/electionToolActions";


export const electionsReducer = (elections = [] , action) => {

    if (action.type === REFRESH_ELECTIONS_DONE_ACTION) {
        
        
        return action.payload.elections;
    }
    return elections;
};

export const errorMessageReducer = (errorMessage = '', action) => {

    
    if (!(action.type === ERROR_MESSAGE_ACTION)) {
        return '';
    }

    return action.payload.errorMessage;

};
    export const newQuestionReducer = ( questions =[], action) =>{
        if (action.type === REFRESH_ELECTIONS_DONE_ACTION) {
            return [];
        }
        if (action.type === NEW_QUESTION_ACTION ) {
            console.log(" NEW ELECTION =  " ,action.type, action.payload) ;
            if(action.payload.question)
                return [...questions,action.payload.question];
            else
                return [action.payload.question];
        }
        return questions;
    }
  

  
  


