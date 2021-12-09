import { useForm } from '../../hooks/useForm';

export const IdentityForm = (props) => {

  const [ idForm, change, resetIdForm ] = useForm({ id: ''});

  const verify = () => {
    props.onVerifyId( idForm.id );
    resetIdForm();
  };

  return (
    <form>
      { props.errorMessage && <div style={{ color: 'red', fontWeight: 'bold' }}>{props.errorMessage}</div>}
      <label>
        Enter you ID here:
        <input type="text" name="id" value={idForm.id} onChange={change} />
      </label>
      <button type="button" onClick={verify}>Verify</button>
    </form>
  );
}