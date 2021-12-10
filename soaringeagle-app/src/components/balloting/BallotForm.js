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


  return (
    <form>
      {questions?.map(question => 
        // <QuestionCheckBox key={question.id} question={question} onCheckChange={checkChange} />
        <label key={question.id}>
          {question.text}
          <input type="checkbox"
                id={question.id}
                name={question.id}
                value={question.id}
                checked={props.checkedState[question.id]}
                //onChange={() => handleOnChange()}
                onClick={handleOnClick}
        />
        </label>
      )}
      <button type="button" onClick={ () => onSubmitBallot(ballot.id)}>Submit</button>
    </form>
  );
}