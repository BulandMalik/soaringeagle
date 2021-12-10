import { all , add, update, /*remove*/  } from '../apis/elections';
export const REFRESH_ELECTIONS_REQUEST_ACTION  = 'REFRESH_ELECTIONS_REQUEST';
export const REFRESH_ELECTIONS_DONE_ACTION     = 'REFRESH_ELECTIONS_DONE';
export const ADD_ELECTION_ACTION        = 'ADD_ELECTION';
export const EDIT_ELECTION_ACTION       = 'EDIT_ELECTION';
export const ERROR_MESSAGE_ACTION       = 'ERROR_MESSAGE';
export const NEW_QUESTION_ACTION        = 'NEW_QUESTION';
export const UPDATE_ELECTION_ACTION     = 'UPDATE_ELECTION';
export const ELECTION_NAME_ACTION       = 'ELECTION_NAME';
export const createRefreshElectionsRequestAction    = ()             => ({ type: REFRESH_ELECTIONS_REQUEST_ACTION   });
export const createRefreshElectionsDoneAction       = elections      => ({ type: REFRESH_ELECTIONS_DONE_ACTION      ,payload:{elections}       });
export const createAddElectionAction                = election       => ({ type: ADD_ELECTION_ACTION                ,payload:{election}        });
export const createUpdateElectionAction             = election       => ({ type: UPDATE_ELECTION_ACTION             ,payload:{election}        });
export const createErrorMessageAction               = errorMessage   => ({ type: ERROR_MESSAGE_ACTION               ,payload:{errorMessage}    });
export const createNewQuestionAction                = question       => ({ type: NEW_QUESTION_ACTION                ,payload:{question}        });
export const createNewElectionNameAction            = electionName   => ({ type: ELECTION_NAME_ACTION                ,payload:{electionName}    });
				
// FUNCTION ACTION OBJECT ss
export const refreshElections = () => {

    // Invoked by Middleware invoke this function  to pass 
    return dispatch => {
        dispatch(createRefreshElectionsRequestAction);
        return all().then( elections => {
             dispatch ( createRefreshElectionsDoneAction(elections))
        });
    };
};

				
// FUNCTION ACTION OBJECT 
export const addElection = election => {

    // Invoked by Middleware invoke this function  to pass 
    return dispatch => {
        dispatch(createAddElectionAction(election));
        add(election).then( () => {
             dispatch (refreshElections())
        });
    };
};

// FUNCTION ACTION OBJECT 
export const updateElection = election => {

    // Invoked by Middleware invoke this function  to pass 
    return dispatch => {
        dispatch(createUpdateElectionAction(election));
        update(election).then( () => {
             dispatch (refreshElections())
        });
    };
};
