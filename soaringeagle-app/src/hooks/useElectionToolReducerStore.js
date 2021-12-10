import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { sortedElectionSelectors } from "../selectors/itemToolSelectors";
import { useEffect, useMemo } from "react";
import {
  refreshElections, 
  addElection, 
  createErrorMessageAction,
  createNewQuestionAction, 
} from "../actions/electionToolActions";

export const useElectionToolReducerStore = () => {

  const elections = useSelector(sortedElectionSelectors);
  const errorMessage = useSelector(state => state.errorMessage);
  const questions = useSelector(state => state.questions);


  const dispatch = useDispatch();

  const boundActions = useMemo(() => bindActionCreators({
    refreshElections, 
    onAddElection : addElection, 
    onErrorMessage : createErrorMessageAction, 
    onNewQuestion : createNewQuestionAction, 
  }, dispatch), [dispatch]);   		// Create only-if "dispatch" CHANGED  else  MEMOIZATION

  useEffect(() => {
    boundActions.refreshElections();
  }, [boundActions]);               // Create only-if "actions"  CHANGED  else  MEMOIZATION


  return { elections, errorMessage , boundActions, questions };



}
