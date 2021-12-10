import { useForm } from '../../hooks/useForm';
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

  return (
    <form>
      {questions?.map(question => 
        // <QuestionCheckBox key={question.id} question={question} onCheckChange={checkChange} />
        <label key={question.id}>
          {question.text}
          <input type="checkbox" name={question.id} value={question.id} />
        </label>
      )}
      <button type="button" onClick={onSubmitBallot}>Submit</button>
    </form>
  );
}