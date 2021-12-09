
import { useVotingToolStore } from "../../hooks/useVotingToolStore";

import { VoterTable } from './VoterTable';

export const VoterTableContainer = () => {

  const store = useVotingToolStore();

  return (
    <>
      <VoterTable voters={store.sortedVoters} editId={store.editId}
        onEdit={store.editVoter} onDelete={store.deleteVoter}
        onSave={store.registerVoter} onCancel={store.cancelVoter} 
        onSort={store.sortVoters} sortCol={store.sortCol} sortDir={store.sortDir}/>
    </>
  );

};