
import { VoterTableContainer } from "./VoterTableContainer";
import { VoterRegistrationFormContainer } from "./VoterRegistrationFormContainer";

export const RegistrationTool = (props) => {

  //console.log("RegistrationTool^^^^^^^^^^^^^^^^^^^^^^^^ props:",props);

  return (
    <>
      { props.action === 'register' 
        ? <VoterRegistrationFormContainer />
        : <VoterTableContainer />
      }
    </>
  );

};