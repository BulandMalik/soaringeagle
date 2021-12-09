import { VoterViewRow } from './VoterViewRow';
import { VoterEditRow } from './VoterEditRow';
import { useState } from "react";

import deleteLogo from '../../images/delete-16.ico';

const tableHeaders=[
  ['Id','id'],
  ['First Name','firstName'],
  ['Last Name','lastName'],
  ['Address','address'],
  ['City','city'],
  ['Birth Date','birthdate'],
  ['Email','email'],
  ['Phone Number','phone'],
]
export const VoterTable = props => {
/*
  const sortByMake = (text) => {
    props.onSort(text);
  };
*/
  const sortDirectionIndicator = (sortCol) => {
    if (sortCol === props.sortCol) {
      return props.sortDir === 'asc' ? ' v' : ' ^';
    }
    return '';
  };  

  const [checkedState, setCheckedState] = useState(
    new Array(props.voters.length).fill(0)
  );

  const handleOnChange = (position) => {
    console.log("updatedCheckedState:",checkedState, " .... position:",position);

    const updatedCheckedState = checkedState.filter( item => item === position);

    console.log("updatedCheckedState:",updatedCheckedState, " .... position:",position);
    setCheckedState(updatedCheckedState);
  };


  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map(([ header, field ]) => <th key={field}>
            <button type="button" onClick={() => props.onSort(field)}>
              {header}{sortDirectionIndicator(field)}
            </button>
          </th>)}          
          <th>Actions</th>
          <th>
            <button type="button"
                onClick={() => props.onDelete(props.voter.id)}><img src={deleteLogo} alt="Edit" /></button>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.voters.map(voter =>
          props.editId === voter.id
            ? <VoterEditRow key={voter.id} voter={voter}
                onSave={props.onSave} onCancel={props.onCancel} />
            : <VoterViewRow key={voter.id} voter={voter}
                onEdit={props.onEdit} onDelete={props.onDelete} checkedState={checkedState} onChange={handleOnChange}/>)}
      </tbody>
    </table>

  );

};