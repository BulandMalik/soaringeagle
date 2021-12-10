import { useElectionToolReducerStore } from "../../hooks/useElectionToolReducerStore";
import { useForm } from '../../hooks/useForm';


export const ElectionForm= () => {

    const {elections, editElectionId, boundActions , electionsSort}   = useElectionToolReducerStore();

    const [ electionForm, change, resetElectionForm ] = useForm (
        {
            make    : 'Volvo',
            model   : 'XC90',
            year    : '2021',
            color   : 'White',
            price   : '60,000',
        }
    );

    // console.log('ELECTION (new)',electionForm);

    const submitElection = () =>{

        boundActions.onAddElection({...electionForm});

        resetElectionForm();
    }


    return  <form>
                <table id="formTbl">
                    <tbody>
                        <tr><td><label>Make: </label></td><td><input type="text" name="make"  value={electionForm.make}      onChange={change} ></input></td></tr>
                        <tr><td><label>Model:</label></td><td><input type="text" name="model" value={electionForm.model}     onChange={change} ></input></td></tr>
                        <tr><td><label>Year: </label></td><td><input type="text" name="year"  value={electionForm.year}      onChange={change} ></input></td></tr>
                        <tr><td><label>Color:</label></td><td><input type="text" name="color" value={electionForm.color}     onChange={change} ></input></td></tr>
                        <tr><td><label>Price:</label></td><td><input type="text" name="price" value={electionForm.price}     onChange={change} ></input></td></tr>
                        <tr><td colSpan="2"><button type="button" onClick={submitElection}>Add Election</button></td></tr>
                    </tbody>
                </table>
            </form>
    
}

