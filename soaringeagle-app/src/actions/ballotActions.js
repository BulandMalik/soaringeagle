
// export const GET_ALL_VOTER_IDS_ACTION = "GET_ALL_VOTER_IDS";
// export const GET_ALL_ELECTION_IDS_ACTION = "GET_ALL_ELECTION_IDS";

export const VERIFY_ACTION = 'VERIFY';
export const START_VOTING_ACTION = 'START_VOTING';

// export const createGetAllVoterIdsAction = () => ({
//   type: GET_ALL_VOTER_IDS_ACTION
// });

// export const createGetAllElectionIdsAction = () => ({
//   type: GET_ALL_ELECTION_IDS_ACTION
// });

export const createVerifyAction = (result) => ({
  type: VERIFY_ACTION, payload: { result }
});

export const createStartVotingAction = (showIDForm) => ({
  type: START_VOTING_ACTION, payload: { showIDForm }
});