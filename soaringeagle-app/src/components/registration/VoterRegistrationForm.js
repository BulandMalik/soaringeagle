import { useForm } from "../../hooks/useForm";
import saveLogo from '../../images/save-16.ico';

export const VoterRegistrationForm = props => {

  const [ voterRegistrationForm, change, resetVoterRegistrationForm ] = useForm({
    id: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    birthDate: '',
    email: '',
    phone: '',
  });

  const submitCar = () => {
    props.onSubmitVoterRegistration({ ...voterRegistrationForm });

    resetVoterRegistrationForm();
  };

  return (
    <form>
      <label>
        First Name:
        <input type="text" name="firstName" value={voterRegistrationForm.firstName} onChange={change} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={voterRegistrationForm.lastName} onChange={change} />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={voterRegistrationForm.address} onChange={change} />
      </label>
      <label>
        City:
        <input type="text" name="city" value={voterRegistrationForm.city} onChange={change} />
      </label>
    <label>
    Birth Date:
    <input type="number" name="birthDate" value={voterRegistrationForm.birthDate} onChange={change} />
    </label>
    <label>
    Email:
    <input type="text" name="email" value={voterRegistrationForm.email} onChange={change} />
    </label>
    <label>
    Phone:
    <input type="text" name="phone" value={voterRegistrationForm.phone} onChange={change} />
    </label>
      <button type="button" onClick={submitCar}><img src={saveLogo} alt={props.buttonText} /></button>
    </form>
  );

};