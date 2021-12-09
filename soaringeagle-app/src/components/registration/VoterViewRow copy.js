import { useState } from "react";
import editLogo from '../../images/edit-16.ico';
import deleteLogo from '../../images/delete-16.ico';

export const VoterViewRow = props => {

  //console.log("VoterViewRow props:",props);

  const [checkedState, setCheckedState] = useState(
    new Array(2).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    console.log("updatedCheckedState:",updatedCheckedState, " .... position:",position);
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
        <button type="button"
          onClick={() => props.onDelete(props.voter.id)}><img src={deleteLogo} alt="Edit" /></button>
      </td>
      <td>
        <input type="checkbox"
                id={`delete-checkbox-${props.voter.id}`}
                name={props.voter.id}
                value={props.voter.id}
                checked={checkedState[props.voter.id]}
                onChange={() => handleOnChange(props.voter.id)}
        />
      </td>
    </tr>    
  );

};