import { IdentityForm } from './IdentityForm';
import { ElectionList } from './ElectionList';
import { BallotForm } from './BallotForm';
import { useVotingToolStore } from '../../hooks/useVotingToolStore';
import { useState } from 'react';

export const BallotingTool = () => {

  const { 
    sortedVoters, voterId, elections, ballot,
    showIDForm, showElectionList, showBallotForm,
    ballotErrorMessage, 
    startVoting, 
    startChooseElection,
    startBalloting,
    chooseElection,
    setCurrentVoterId,
    verify,
    updateElection,
  } = useVotingToolStore();

  //console.log("BallotingTool >>>>>>>> ballotErrorMessage:",ballotErrorMessage);

  const Vote = () => {
    //console.log("vote");
    startVoting(true);
  }

  const [checkedState, setCheckedState] = useState([]); //new Array(props.voters.length).fill(0)
  
  //console.log("checkedState::::::::",checkedState);

  const handleOnChange = (event) => {
    const id = parseInt(event.target.id,10);
    //console.log("checkedState:",checkedState, " .... event Id:",id, ", event checked",event.target.checked);

    let updatedCheckedState = [...checkedState];
    if ( updatedCheckedState.includes(id) ) {
        if ( !event.target.checked ) {
          updatedCheckedState = updatedCheckedState.filter( checkedStateId => checkedStateId !== id);
        }
    }
    else updatedCheckedState.push(id);

    //console.log("updatedCheckedState:",updatedCheckedState);
    setCheckedState(updatedCheckedState);
  };

  const verifyId = (id) => {
    //console.log("id:",id);
    const voters = [ ...sortedVoters];
    //console.log("voters:",voters);

    const index = voters.findIndex(v => {
      //console.log("v.id:",v.id,"v.id === id,",v.id === parseInt(id,10)); 
      //console.log(typeof v.id,"------------",typeof id ); 
      return v.id === parseInt(id,10)});
    //console.log("index:",index);
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
    const index = elections.findIndex(e => e.id === electionId);
    const voterIds = elections[index].voterIds;

    // verify if the user has already voted for this election
    if(voterIds.includes(parseInt(voterId))){
      // console.log("duplicate electionSelected");
      chooseElection(-2); // -2 => indicate duplicates selections
      //startChooseElection(true);
      //startBalloting(false);
    } else {
      // add voterId to election.voterIds
      //voterIds.push(parseInt(voterId));
      //elections[index].voterIds = voterIds;
      //updateElection(elections[index]);

      startChooseElection(false);
      startBalloting(true);
    }
  }

  const submitBallot = (electionId) => {
    //console.log("!! submit ballot", electionId);

    const updatedElection = elections.filter( election => election.id === electionId);
    //console.log("updatedElection,", updatedElection[0]);
    const voterIds = updatedElection[0].voterIds;
    //console.log("voterIds,", voterIds);
    voterIds.push(parseInt(voterId));

    updatedElection[0].questions = updatedElection[0].questions.map(question => {
      //console.log("checkedState.includes(question.id),", checkedState.includes(question.id));
      if ( checkedState.includes(question.id) ) {
        question.yesCount++;
      }
      //console.log("question:",question)
      return question;
    });
    //let newElections = [...elections];
    updatedElection[0].voterIds = voterIds;
/*
    newElections.map(election => {
      if ( election.id === electionId ) {
        retur updatedElection;
      }
      return election;
    })
*/
    //console.log("updatedElection,", updatedElection[0]);
    updateElection(updatedElection[0]);

    // "yes count on question level"
    startChooseElection(true);
    startBalloting(false);
  }


  return (
    <>
      <h1>Balloting</h1>
      { showIDForm && !showElectionList && <IdentityForm onVerifyId={verifyId} errorMessage={ballotErrorMessage} />}
      
      { !showIDForm && !showElectionList && !showBallotForm && <button type="button" onClick={Vote}>Vote</button> }

      { showElectionList && <ElectionList elections={elections} onSelectElection={selectElection} errorMessage={ballotErrorMessage} />}
      
      { showBallotForm && !showElectionList && <BallotForm ballot={ballot} onSubmitBallot={submitBallot} 
      checkedState={checkedState} onChange={handleOnChange} />}
    </>
  );

};