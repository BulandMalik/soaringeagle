import { useForm } from '../../hooks/useForm';
import { useState } from 'react';

export const ElectionAddRow = ( props ) => {


    const [] = useState();

    const [ addQuestionForm, change ] = useForm ({
        id     : props.questionID,
        electionName       : props.electionName,
        text   : props.questionText,
    });

    
    const onAddQuestion = (questionForm) => {
        props.onQuestion({...addQuestionForm,electionName:props.electionName});
    }

    return <tr>
            <td></td>
            <td>{
                addQuestionForm.id < 0
                ? <input  type="text" name="electionName" value={addQuestionForm.electionName}     onChange={change}  size="20" className="inlineEdit"></input>
                : <>{}</>
               }
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

