
// export const GET_ALL_VOTER_IDS_ACTION = "GET_ALL_VOTER_IDS";
// export const GET_ALL_ELECTION_IDS_ACTION = "GET_ALL_ELECTION_IDS";

export const VERIFY_ACTION = 'VERIFY';
export const START_VOTING_ACTION = 'START_VOTING';
export const START_CHOOSE_ELECTION_ACTION = 'START_CHOOSE_ELECTION';
export const CHOOSE_ELECTION_ACTION = 'CHOOSE_ELECTION_ACTION';
export const START_BALLOTING_ACTION = 'START_BALLOTING_ACTION';
export const SET_CURRENT_VOTER_ACTION = 'SET_CURRENT_VOTER';
export const SET_DUPLICATE_ELECTION_ACTION = 'SET_DUPLACATE_ELECTION'
// export const createGetAllVoterIdsAction = () => ({
//   type: GET_ALL_VOTER_IDS_ACTION
// });

// export const createGetAllElectionIdsAction = () => ({
//   type: GET_ALL_ELECTION_IDS_ACTION
// });

export const createVerifyAction = (result) => (
  console.log("createVerifyAction,",result),
  {type: VERIFY_ACTION, payload: { result }}
);

export const createStartVotingAction = (showIDForm) => (
  // console.log("createStartVotingAction",showIDForm), 
  {
  type: START_VOTING_ACTION, payload: { showIDForm }
});

export const createStartChooseElectionAction = (showElectionList) => ({
  type: START_CHOOSE_ELECTION_ACTION, payload: {showElectionList}
});

export const createChooseElectionAction = (electionId) => ({
  type: CHOOSE_ELECTION_ACTION, payload: {electionId}
});

export const createStartBallotingAction = (showBallotForm) => ({
  type: START_BALLOTING_ACTION, payload: {showBallotForm}
});

export const createSetCurrentVoterAction = (voterId) => ({
  type: SET_CURRENT_VOTER_ACTION, payload: {voterId}
});

// export const createSetDupElectionAction = (election)