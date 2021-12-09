
import { useVotingToolStore } from "../../hooks/useVotingToolStore";

import { VoterTable } from './VoterTable';

export const VoterTableContainer = () => {

  const store = useVotingToolStore();

  return (
    <>
      <VoterTable voters={store.sortedVoters} editId={store.editId}
        onEditVoter={store.replaceVoter} onDeleteVoter={store.deleteVoter}
        onSaveVoter={store.registerVoter} onCancelVoter={store.cancelCar} 
        onSort={store.sortVoters} sortCol={store.sortCol} sortDir={store.sortDir}/>
    </>
  );

};