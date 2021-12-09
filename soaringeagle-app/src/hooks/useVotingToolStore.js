import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { sortedItemsSelector } from "../selectors/itemToolSelectors";

import { 
    createSortAction, createCancelAction, createEditAction,
    refreshVoters, registerVoterFn, deleteVoterFn, replaceVoterFn
} from "../actions/votersActions";

import { createVerifyAction, createStartVotingAction } from '../actions/ballotActions';

export const useVotingToolStore = () => {

    const sortedVoters = useSelector( sortedItemsSelector );
    const editId = useSelector( state => state.itemEditId );
    const { sortCol, sortDir } = useSelector(
        state => state.itemsSort);

    console.log("editId::",editId);
    console.log("sortCol::",sortCol,", sortDir",sortDir);

    const errorMessage = useSelector(state => state.errorMessage);
    const showIDForm = useSelector(state => state.showIDForm);
    
    const dispatch = useDispatch();

    const actions = useMemo( () => bindActionCreators({
        refreshVoters,
        registerVoter: registerVoterFn,
        editVoter: createEditAction,
        saveVoter: replaceVoterFn,
        deleteVoter: deleteVoterFn,
        cancelVoter: createCancelAction,
        sortVoters: createSortAction,
        verify: createVerifyAction,
        startVoting: createStartVotingAction,
    }, dispatch), [dispatch]);

    useEffect( () => {
        actions.refreshVoters(); //stale closure as every render bind creates new refreshColors
    }, [actions]); //actions changes every single render, thast the problem

    return {
        sortedVoters,
        editId,
        sortCol,
        sortDir,
        errorMessage,
        showIDForm,
        ...actions,
      };


};