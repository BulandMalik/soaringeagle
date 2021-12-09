

export const VoterViewRow = props => {

  console.log("VoterViewRow props:",props);

  return (
    <tr>
      <td>{props.voter.id}</td>
      <td>{props.voter.firstName}</td>
      <td>{props.voter.lastName}</td>
      <td>{props.voter.address}</td>
      <td>{props.voter.city}</td>
      <td>{props.voter.birthdate}</td>
      <td>{props.voter.email}</td>
      <td>{props.voter.phone}</td>
      <td>
        <button type="button"
          onClick={() => props.onEdit(props.voter.id)}>Edit</button>
        <button type="button"
          onClick={() => props.onDelete(props.voter.id)}>Delete</button>
      </td>
    </tr>    
  );

};