import { all , add, update, remove  } from '../apis/elections';
export const REFRESH_ELECTIONS_REQUEST_ACTION     = 'REFRESH_ELECTIONS_REQUEST';
export const REFRESH_ELECTIONS_DONE_ACTION     = 'REFRESH_ELECTIONS_DONE';
export const ADD_ELECTION_ACTION     = 'ADD_ELECTION';
export const UPDATE_ELECTION_ACTION     = 'UPDATE_ELECTION';
export const REMOVE_ELECTION_ACTION     = 'REMOVE_ELECTION';
export const EDIT_ELECTION_ACTION     = 'EDIT_ELECTION';
export const CANCEL_ELECTION_ACTION     = 'CANCEL_ELECTION';
export const SORT_ELECTION_ACTION     = 'SORT_ELECTION';
export const createRefreshElectionsRequestAction    = ()       => ({ type: REFRESH_ELECTIONS_REQUEST_ACTION                });
export const createRefreshElectionsDoneAction    = elections       => ({ type: REFRESH_ELECTIONS_DONE_ACTION      ,payload:{elections}         });
export const createAddElectionAction    = election       => ({ type: ADD_ELECTION_ACTION      ,payload:{election}         });
export const createUpdateElectionAction    = election       => ({ type: UPDATE_ELECTION_ACTION      ,payload:{election}         });
export const createRemoveElectionAction    = electionId       => ({ type: REMOVE_ELECTION_ACTION      ,payload:{electionId}         });
export const createEditElectionAction    = electionId       => ({ type: EDIT_ELECTION_ACTION      ,payload:{electionId}         });
export const createCancelElectionAction    = ()       => ({ type: CANCEL_ELECTION_ACTION               });
export const createSortElectionAction    = (sortCol)       => ({ type: SORT_ELECTION_ACTION      , sortCol , sortDir:''         });
				
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

				
// FUNCTION ACTION OBJECT 
export const removeElection = electionId => {

    // Invoked by Middleware invoke this function  to pass 
    return dispatch => {
        dispatch(createRemoveElectionAction(electionId));
        remove(electionId).then( () => {
             dispatch (refreshElections())
        });
    };
};


