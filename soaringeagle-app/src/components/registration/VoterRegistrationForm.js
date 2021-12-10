import { useForm } from "../../hooks/useForm";
import addLogo from '../../images/add-16.ico';
import { useHistory } from "react-router-dom";


export const VoterRegistrationForm = props => {

  const [ voterRegistrationForm, change, resetVoterRegistrationForm ] = useForm({
    id: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    birthdate: '',
    email: '',
    phone: '',
  });


  const history = useHistory();

  const handleRoute = () =>{
    history.push("/registration/list");
  }

  const submitCar = () => {
    props.onSubmitVoterRegistration({ ...voterRegistrationForm });

    resetVoterRegistrationForm();

    handleRoute();
  };


  return (
    <form>
        <ul className="flex-outer">
          <li>
            <label> First Name: </label>
            <input type="text" name="firstName" value={voterRegistrationForm.firstName} onChange={change} />
          </li>
          <li>
            <label> Last Name: </label>
            <input type="text" name="lastName" value={voterRegistrationForm.lastName} onChange={change} />
          </li>
          <li>
            <label> Address: </label>
            <input type="text" name="address" value={voterRegistrationForm.address} onChange={change} />
          </li>
          <li>
            <label> City: </label>
            <input type="text" name="city" value={voterRegistrationForm.city} onChange={change} />
          </li>
          <li>
            <label> Birth Date: </label>
            <input type="text" name="birthdate" value={voterRegistrationForm.birthdate} onChange={change} />
          </li>
          <li>
            <label> Email: </label>
            <input type="text" name="email" value={voterRegistrationForm.email} onChange={change} />
          </li>
          <li>
            <label> Phone: </label>
            <input type="text" name="phone" value={voterRegistrationForm.phone} onChange={change} />
          </li>
          <li className="liBtn">
            <button type="button" onClick={submitCar}><img src={addLogo} alt={props.buttonText} /></button>
          </li>
        </ul>
    </form>      
  );

};