import { useForm } from '../../hooks/useForm';


export const ElectionAddRow = ( props ) => {


   
    const [ addQuestionForm, change ] = useForm ({
        id     : props.questionID,
        electionName : '',
        text   : props.questionText,
    });

    
/*
{
                addQuestionForm.id < 0
                ? <input key="electionName" type="text" name="electionName" value={addQuestionForm.electionName}     onChange={change}  size="20" className="inlineEdit"></input>
                : <>{addQuestionForm.text}</>
                 }
*/
    return <tr>
            <td>
            </td>
            <td>{ addQuestionForm.id < 0?<button type="button" onClick={()=>props.onQuestion(addQuestionForm)}>+</button>:''+addQuestionForm.id}</td>
            <td>
                {
                addQuestionForm.id < 0
                ? <input key="text"  type="text" name="text" value={addQuestionForm.text}     onChange={change}  size="60" className="inlineEdit"></input>
                : <>{addQuestionForm.text}</>
                }
            </td>
            {
                addQuestionForm.id < 0
                ?<td colspan={2}  ><button type="button" type="button" onClick={()=>props.saveElection(addQuestionForm)} >Create</button></td>
                :<></>
            }
        </tr>
 };

