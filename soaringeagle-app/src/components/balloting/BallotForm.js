//import { useForm } from '../../hooks/useForm';
// import { QuestionCheckBox } from './QuestionCheckBox';
export const BallotForm = (props) => {

  // const [ ballotForm, change, resetBallotForm ] = useForm(props.ballot);
  const { ballot, onSubmitBallot } = props;

  // why use ?: ballot.questions is undifined: some property are missing from ballot
  const questions = ballot?.questions; 

  // const check = () => {
  //   // props.onCheck( idForm.id );
  //   resetBallotForm();
  // };

  const handleOnClick = (event) => {
    props.onChange(event);
  };

  const handleOnChange = (position) => {
      console.log(position);
  }

  return (
    <form>
      <ul className="flex-outer">
        {questions?.map( (question,index) => 
          // <QuestionCheckBox key={question.id} question={question} onCheckChange={checkChange} />
            <li key={index}>
              <label key={question.id}>{question.text}</label>
              <input type="checkbox"
                  id={question.id}
                  name="ParticipantSelection[]"
                  value={question.id}
                  checked={props.checkedState[question.id]}
                  //onChange={() => handleOnChange(index)}
                  onClick={handleOnClick}
              />
            </li>
        )}
        <li className="liBtn"><button type="button" onClick={ () => onSubmitBallot(ballot.id)}>Submit</button></li>
      </ul>
    </form>
  );
}