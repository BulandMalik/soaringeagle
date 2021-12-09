import { VoterViewRow } from './VoterViewRow';
import { VoterEditRow } from './VoterEditRow';

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
        </tr>
      </thead>
      <tbody>
        {props.voters.map(voter =>
          props.editCarId === voter.id
            ? <VoterEditRow key={voter.id} voter={voter}
                onSaveCar={props.onSaveCar} onCancelCar={props.onCancelCar} />
            : <VoterViewRow key={voter.id} voter={voter}
                onEditCar={props.onEditCar} onDeleteCar={props.onDeleteCar} />)}
      </tbody>
    </table>

  );

};