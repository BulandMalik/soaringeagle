import { IdentityForm } from './IdentityForm';
import { ElectionList } from './ElectionList';
import { BallotForm } from './BallotForm';
import { useVotingToolStore } from '../../hooks/useVotingToolStore';

export const BallotingTool = () => {

  const { 
    sortedVoters, voterId, elections, ballot,
    showIDForm, showElectionList, showBallotForm,
    errorMessage, 
    startVoting, 
    startChooseElection,
    startBalloting,
    chooseElection,
    setCurrentVoterId,
    verify,
    updateElection,
  } = useVotingToolStore();

  const Vote = () => {
    startVoting(true);
  }

  const verifyId = (id) => {
    const voters = [ ...sortedVoters];
    const index = voters.findIndex(v => v.id == id);
    if( index === -1 ){
      // not found, show errorMessage
      verify(false)
    } else {
      setCurrentVoterId(id);
      verify(true); // showElectionList

      // show electionList component
      startVoting(false);
      startChooseElection(true);
    }
    
  }

  // show Ballot
  const selectElection = (electionId) => {
    chooseElection(electionId);
    const index = elections.findIndex(e => e.id == electionId);
    const voterIds = elections[index].voterIds;

    // verify if the user has already voted for this election
    if(voterIds.includes(parseInt(voterId))){
      // console.log("duplicate electionSelected");
      chooseElection(-2); // -2 => indicate duplicates selections
      startChooseElection(true);
      startBalloting(false);
    } else {
      // add voterId to election.voterIds
      voterIds.push(parseInt(voterId));
      elections[index].voterIds = voterIds;
      updateElection(elections[index]);

      startChooseElection(false);
      startBalloting(true);
    }
  }

  const submitBallot = () => {
    console.log("!! submit ballot");

    // "yes count on question level"
    startChooseElection(true);
    startBalloting(false);
  }


  return (
    <>
      <h1>Balloting</h1>
      { showIDForm && !showElectionList && <IdentityForm onVerifyId={verifyId} errorMessage={errorMessage} />}
      { !showIDForm && !showElectionList && !showBallotForm && <button type="button" onClick={Vote}>Vote</button> }
      { showElectionList && <ElectionList elections={elections} onSelectElection={selectElection} errorMessage={errorMessage} />}
      { showBallotForm && !showElectionList && <BallotForm ballot={ballot} onSubmitBallot={submitBallot} />}
    </>
  );

};