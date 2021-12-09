
//import { useCarToolStoreContext } from "../context/carToolStoreContext";
import { useVotingToolStore } from "../../hooks/useVotingToolStore";

import {VoterRegistrationForm} from "./VoterRegistrationForm";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export const VoterRegistrationFormContainer = () => {

  //const store = useCarToolStoreContext();
  //const store = useCarToolRedusStore();
  const store = useVotingToolStore();

  return (
    <>
      <VoterRegistrationForm buttonText="Add Voter" onSubmitVoterRegistration={store.registerVoter} />
    </>
  );

};