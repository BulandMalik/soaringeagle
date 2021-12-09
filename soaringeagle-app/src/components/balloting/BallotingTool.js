import { IdentityForm } from './IdentityForm';
import { useVotingToolStore } from '../../hooks/useVotingToolStore';

export const BallotingTool = () => {

  const { showIDForm, sortedVoters, errorMessage, startVoting, verify} = useVotingToolStore();

  const Vote = () => {
    console.log("vote starts");
    startVoting(true);
  }

  const verifyId = (id) => {
    const voters = [ ...sortedVoters];
    const index = voters.findIndex(v => v.id == id);
    if( index === -1 ){
      // not found, show errorMessage
      verify(false)
    } else {
      verify(true);
      // show election choose component
    }
    
  }

  return (
    <>
      <h1>Balloting</h1>
      { showIDForm && <IdentityForm onVerifyId={verifyId} errorMessage={errorMessage} />}
      { !showIDForm && <button type="button" onClick={Vote}>Vote</button> }
    </>
  );

};