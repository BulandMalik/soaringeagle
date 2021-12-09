import { useForm } from '../hooks/useForm';

export const VoterRegistrationForm = props => {

  const [ voterRegistrationForm, change, resetVoterRegistrationForm ] = useForm({
    id: '',
    firstName: '',
    lastName: 1900,
    address: '',
      city: 0,
      birthDate: 0,
      email: 0,
      phone: 0,
  });

  const submitCar = () => {
    props.onSubmitCar({ ...voterRegistrationForm });

    resetVoterRegistrationForm();
  };

  return (
    <form>
      <label>
        Make:
        <input type="text" name="id" value={voterRegistrationForm.id} onChange={change} />
      </label>
      <label>
        Model:
        <input type="text" name="firstName" value={voterRegistrationForm.firstName} onChange={change} />
      </label>
      <label>
        Year:
        <input type="number" name="lastName" value={voterRegistrationForm.lastName} onChange={change} />
      </label>
      <label>
        Color:
        <input type="text" name="address" value={voterRegistrationForm.address} onChange={change} />
      </label>
      <label>
        Price:
        <input type="number" name="city" value={voterRegistrationForm.city} onChange={change} />
      </label>
    <label>
    Price:
    <input type="number" name="birthDate" value={voterRegistrationForm.birthDate} onChange={change} />
    </label>
    <label>
    Price:
    <input type="number" name="email" value={voterRegistrationForm.email} onChange={change} />
    </label>
    <label>
    Price:
    <input type="number" name="phone" value={voterRegistrationForm.phone} onChange={change} />
    </label>
      <button type="button" onClick={submitCar}>{props.buttonText}</button>
    </form>
  );

};