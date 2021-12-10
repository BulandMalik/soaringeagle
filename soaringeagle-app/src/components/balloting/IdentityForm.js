import { useForm } from '../../hooks/useForm';

export const IdentityForm = (props) => {

  const [ idForm, change, resetIdForm ] = useForm({ id: ''});

  const verify = () => {
    props.onVerifyId( idForm.id );
    resetIdForm();
  };

  return (
    <form>
      { props.errorMessage && <div className="" style={{ padding:'5px', textAlign:'center', color: 'red', fontWeight: 'bold' }}>{props.errorMessage}</div>}
      <ul className="flex-outer">
          <li>
            <label> Enter you ID here: </label>
            <input type="text" name="id" value={idForm.id} onChange={change} />
          </li>
          <li>
            <button type="button" onClick={verify}>Verify</button>
          </li>
      </ul>
    </form>
  );
}