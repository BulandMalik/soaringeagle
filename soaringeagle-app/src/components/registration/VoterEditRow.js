import { useForm } from "../../hooks/useForm";

export const VoterEditRow = props => {

  const [ voterForm, change ] = useForm({
    firstName: props.voter.firstName,
    lastName: props.voter.lastName,
    address: props.voter.address,
    city: props.voter.city,
    birthdate: props.voter.birthdate,
    email: props.voter.email,
    phone: props.voter.phone,
  });

  const saveVoter = () => {
    props.onSaveCar({
      ...voterForm,
      id: props.voter.id,
    });
  };

  const cancelVoter = () => {
    props.onCancelCar(props.voter.id);
  };  


  return (
    <tr>
      <td>{props.car.id}</td>
      <td><input type="text" name="firstName" value={voterForm.firstName} onChange={change} /></td>
      <td><input type="text" name="lastName" value={voterForm.lastName} onChange={change} /></td>
      <td><input type="text" name="address" value={voterForm.address} onChange={change} /></td>
      <td><input type="text" name="city" value={voterForm.city} onChange={change} /></td>
      <td><input type="text" name="birthdate" value={voterForm.birthdate} onChange={change} /></td>
      <td><input type="text" name="email" value={voterForm.email} onChange={change} /></td>
      <td><input type="number" name="phone" value={voterForm.phone} onChange={change} /></td>
      <td>
        <button type="button"
          onClick={saveVoter}>Save</button>
        <button type="button"
          onClick={cancelVoter}>Cancel</button>
      </td>
    </tr>    
  );

};