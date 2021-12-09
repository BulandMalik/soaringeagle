import editLogo from '../../images/edit-16.ico';

export const VoterViewRow = props => {

  //console.log("VoterViewRow props:",props);

  const handleOnClick = (event) => {
    //console.log("updatedCheckedState:",updatedCheckedState, " .... position:",position);
    props.onChange(event);
  };

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
          onClick={() => props.onEdit(props.voter.id)}><img src={editLogo} alt="Edit" /></button>
      </td>
      <td>
        <input type="checkbox"
                id={props.voter.id}
                name={props.voter.id}
                value={props.voter.id}
                checked={props.checkedState[props.voter.id]}
                //onChange={() => handleOnChange()}
                onClick={handleOnClick}
        />
      </td>
    </tr>    
  );

};