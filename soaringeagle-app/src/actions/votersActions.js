import { all, registerVoter, deleteVoters, replaceVoter } from "../apis/voters";

export const REFRESH_VOTERS_REQUEST_ACTION = "REFRESH_VOTERS_REQUEST_ACTION";
export const REFRESH_VOTERS_DONE_ACTION = "REFRESH_VOTERS_DONE_ACTION";

export const REGISTER_VOTER_REQUEST_ACTION = "REGISTER_VOTER_REQUEST_ACTION";
export const REGISTER_VOTER_DONE_ACTION = "REGISTER_VOTER_DONE_ACTION";

export const REPLACE_VOTER_REQUEST_ACTION = "REPLACE_VOTER_REQUEST_ACTION";
export const REPLACE_VOTER_DONE_ACTION = "REPLACE_VOTER_DONE_ACTION";

export const DELETE_VOTER_REQUEST_ACTION = "DELETE_VOTER_REQUEST_ACTION";
export const DELETE_VOTER_DONE_ACTION = "DELETE_VOTER_DONE_ACTION";

export const EDIT_ACTION = "edit";
export const CANCEL_ACTION = "cancel";
export const SORT_ITEMS_ACTION = "sortItem";

export const createRerfreshVotersRequestAction = () => ({type: REFRESH_VOTERS_REQUEST_ACTION});
export const createRerfreshVoterDoneAction = (registeredVoters) => ({
    type: REFRESH_VOTERS_DONE_ACTION, payload: { registeredVoters }
});
export const refreshVoters = () => {

    console.log("refreshing.......");
    //it is the function action object that intercepted by middleware
    //when the middleware invokes this function is passes in the store's dispatch method
    return dispatch => {
        dispatch(createRerfreshVotersRequestAction());
        return all().then( registeredVoters => {
            dispatch(createRerfreshVoterDoneAction(registeredVoters));
        })
    };
};

export const createRegisterVoterRequestAction = () => ({type: REGISTER_VOTER_REQUEST_ACTION});
export const createRegisterVoterDoneAction = (voter) => (
    {type: REGISTER_VOTER_DONE_ACTION, payload: voter}
);
export const registerVoterFn = (voter) => {
    //it is the function action object that intercepted by middleware
    //when the middleware invokes this function is passes in the store's dispatch method
    return dispatch => {
        dispatch(createRegisterVoterRequestAction());
        return registerVoter(voter).then( voter => {
            dispatch(refreshVoters());
        })
    };
};

export const createReplaceVoterRequestAction = () => ({type: REPLACE_VOTER_REQUEST_ACTION});
export const createReplaceVoterDoneAction = (car) => (
    {type: REPLACE_VOTER_DONE_ACTION, payload: car}
);
export const replaceVoterFn = (voter) => {
    return dispatch => {
        dispatch(createReplaceVoterRequestAction());
        return replaceVoter(voter).then( voter => {
            dispatch(refreshVoters());
        })
    };
};

export const createDeleteVoterRequestAction = () => ({type: DELETE_VOTER_REQUEST_ACTION});
export const createDeleteVoterDoneAction = (voterId) => (
    {type: DELETE_VOTER_DONE_ACTION, payload: voterId}
);
export const deleteVoterFn = (voterIds) => {
    return dispatch => {
        dispatch(createDeleteVoterRequestAction());
        return deleteVoters(voterIds).then( () => {
            dispatch(refreshVoters());
        })
    };
};

export const createEditAction = (voterId) => (
  { type: EDIT_ACTION, payload: {voterId} }
);

export const createCancelAction = () => (
    { type: CANCEL_ACTION }
);

export const createSortAction =  (sortCol) => (
    { type: SORT_ITEMS_ACTION, payload: { sortCol } }
);
/*
export const createSortDirAction =  () => (
    { type: SORT_DIR_ACTION }
);
*/
