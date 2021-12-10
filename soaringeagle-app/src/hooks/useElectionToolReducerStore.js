import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { sortedElectionSelectors } from "../selectors/itemToolSelectors";
import { useEffect, useMemo } from "react";
import {
  refreshElections, 
  addElection, 
  updateElection, 
  removeElection, 
  createEditElectionAction, 
  createCancelElectionAction, 
  createNewQuestionAction, 
} from "../actions/electionToolActions";

export const useElectionToolReducerStore = () => {

  const elections = useSelector(sortedElectionSelectors);
  const editElectionId = useSelector(state => state.editElectionId);
  const questions = useSelector(state => state.questions);


  const dispatch = useDispatch();

  const boundActions = useMemo(() => bindActionCreators({
    refreshElections, 
    onAddElection : addElection, 
    onUpdateElection : updateElection, 
    onRemoveElection : removeElection, 
    onEditElection : createEditElectionAction, 
    onCancelElection : createCancelElectionAction, 
    onNewQuestion : createNewQuestionAction, 
  }, dispatch), [dispatch]);   		// Create only-if "dispatch" CHANGED  else  MEMOIZATION

  useEffect(() => {
    boundActions.refreshElections();
  }, [boundActions]);               // Create only-if "actions"  CHANGED  else  MEMOIZATION


  return { elections, editElectionId, boundActions, questions };



}
