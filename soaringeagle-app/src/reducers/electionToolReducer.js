import {
    // ADD_ELECTION_ACTION,
	ERROR_MESSAGE_ACTION,
    ELECTION_NAME_ACTION,
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

export const electionNameReducer = (electionName = '', action) => {

    
    if (action.type === ELECTION_NAME_ACTION) {
        //console.log('ELECTION NAME ' , action.payload.electionName);
        return action.payload.electionName;
    }else if(action.type === NEW_QUESTION_ACTION){
        return electionName;
    }    

    return electionName;

};
    export const newQuestionReducer = ( questions =[], action) =>{
        if (action.type === REFRESH_ELECTIONS_DONE_ACTION) {
            return [];
        }
        if (action.type === NEW_QUESTION_ACTION ) {
            // console.log(" NEW ELECTION =  " ,action.type, action.payload) ;
            if(action.payload.question)
                return [...questions,action.payload.question];
            else
                return [action.payload.question];
        }
        return questions;
    }
  

  
  


