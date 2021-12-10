import { combineReducers } from "redux";
import { SORT_ASC, SORT_DESC } from '../selectors/itemToolSelectors';

import {
    ADD_ELECTION_ACTION,
	UPDATE_ELECTION_ACTION,
	REMOVE_ELECTION_ACTION,

	EDIT_ELECTION_ACTION,
	CANCEL_ELECTION_ACTION,

	NEW_QUESTION_ACTION,

    REFRESH_ELECTIONS_DONE_ACTION
} from "../actions/electionToolActions";


export const electionsReducer = (elections = [] , action) => {

    if (action.type === REFRESH_ELECTIONS_DONE_ACTION) {
        
        
        return action.payload.elections;
    }
    return elections;
};

export const editElectionIdReducer = (editElectionId = -1, action) => {

    
    if ([
        ADD_ELECTION_ACTION, UPDATE_ELECTION_ACTION,
        REMOVE_ELECTION_ACTION, CANCEL_ELECTION_ACTION
    ].includes(action.type)) {
        return -1;
    }

    return editElectionId;

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
  
// export const newElectionReducer = ( newElection = {
//         id: -1,
//         questions: [
//             {
//                 id: 1,
//                 text: '',
//                 yesCount: 0
//             }
//         ],
//         voterIds:[]
//     } , action) => {


   
    
//     if (action.type === NEW_QUESTION_ACTION ) {
//         console.log(" NEW ELECTION =  " ,action.type, action.payload.newElection) ;

//         if(action.payload.newElection.id < newElection.id){
//             return {...action.payload.newElection,id: action.payload.newElection.id-1 ,questions: [...action.payload.newElection.questions,{
//                 id:  Math.max(...action.payload.newElection.questions.map(q => q.id), 0 ) + 1 ,
//                 text: '',
//                 yesCount: 0
//             }]};
//         }

//         if(action.payload.newElection.id > newElection.id){
//             let questions = [...action.payload.newElection.questions];
//             questions.pop();
//             return {...newElection,id: action.payload.newElection.id+1,questions: questions };
//         }
//     }

//     return newElection;
// };
  
  


