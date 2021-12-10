import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { sortedItemsSelector } from "../selectors/itemToolSelectors";

import { 
    createSortAction, createCancelAction, createEditAction,
    refreshVoters, registerVoterFn, deleteVoterFn, replaceVoterFn
} from "../actions/votersActions";

import { 
    createVerifyAction, 
    createStartVotingAction, 
    createStartChooseElectionAction, 
    createChooseElectionAction, 
    createStartBallotingAction,
    createSetCurrentVoterAction,
} from '../actions/ballotActions';
import { refreshElections, updateElection } from '../actions/electionToolActions';

export const useVotingToolStore = () => {

    const sortedVoters = useSelector( sortedItemsSelector );
    const editId = useSelector( state => state.itemEditId );
    const { sortCol, sortDir } = useSelector(
        state => state.itemsSort);

    // console.log("editId::",editId);
    // console.log("sortCol::",sortCol,", sortDir",sortDir);

    const errorMessage = useSelector(state => state.errorMessage);
    const showIDForm = useSelector(state => state.showIDForm);
    const showBallotForm = useSelector(state => state.showBallotForm);
    const elections = useSelector(state => state.elections);
    const chooseElectionId = useSelector(state => state.chooseElectionId);
    const voterId = useSelector(state => state.voterId);
    const showElectionList = useSelector(state => state.showElectionList);
    /* !! not sure why this works */
    const getBallot = () => {
        let ballot;
        elections.map(election => {
            if(election.id === chooseElectionId){
                ballot = election;
                return election;
            }
        });
        return ballot;
    }
    const ballot = getBallot();

    // console.log("ballottttt",ballot);

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
        startChooseElection: createStartChooseElectionAction,
        startBalloting: createStartBallotingAction,
        chooseElection: createChooseElectionAction,
        setCurrentVoterId: createSetCurrentVoterAction,
        refreshElections,
        updateElection: updateElection,
    }, dispatch), [dispatch]);

    useEffect( () => {
        actions.refreshVoters(); //stale closure as every render bind creates new refreshColors
        actions.refreshElections();
    }, [actions]); //actions changes every single render, thast the problem

    return {
        sortedVoters,
        voterId,
        elections,
        ballot,
        editId,
        sortCol,
        sortDir,
        errorMessage,
        showIDForm,
        showElectionList,
        showBallotForm,
        ...actions,
      };


};