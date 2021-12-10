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
  
  const sortDirectionIndicator = (sortCol) => {
    if (sortCol === props.sortCol) {
      return props.sortDir === 'asc' ? ' v' : ' ^';
    }
    return '';
  };  

  const [checkedState, setCheckedState] = useState([]); //new Array(props.voters.length).fill(0)
  
  console.log("checkedState::::::::",checkedState);

  const handleOnChange = (event) => {
    const id = parseInt(event.target.id,10);

    console.log("checkedState:",checkedState, " .... event Id:",id, ", event checked",event.target.checked);

    let updatedCheckedState = [...checkedState];
    if ( updatedCheckedState.includes(id) ) {
        if ( !event.target.checked ) {
          updatedCheckedState = updatedCheckedState.filter( checkedStateId => checkedStateId !== id);
        }
    }
    else updatedCheckedState.push(id);

    console.log("updatedCheckedState:",updatedCheckedState);
    setCheckedState(updatedCheckedState);
  };

  const onDelete = () => {
    props.onDelete(checkedState)
    setCheckedState([]);
  }

  return (
    <table className="blueTable">
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
                onClick={onDelete}><img src={deleteLogo} alt="Edit" /></button>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.voters.map(voter =>
          props.editId === voter.id
            ? <VoterEditRow key={voter.id} voter={voter}
                onSave={props.onSave} onCancel={props.onCancel} checkedState={checkedState} onChange={handleOnChange} />
            : <VoterViewRow key={voter.id} voter={voter}
                onEdit={props.onEdit} onDelete={props.onDelete} checkedState={checkedState} onChange={handleOnChange}/>)}
      </tbody>
    </table>

  );

};