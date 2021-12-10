import { useForm } from '../../hooks/useForm';


export const ElectionAddRow = ( props ) => {


   
    const [ addQuestionForm, change ] = useForm ({
        id     : props.questionID,
        text   : props.questionText,
    });

    console.log('ELECTION (edit)',addQuestionForm);

    return <tr>
            <td>
                
                
            </td>
            <td>{ addQuestionForm.id < 0?<button type="button" onClick={()=>props.onQuestion(addQuestionForm)}>+</button>:''+addQuestionForm.id}</td>
            <td>
                {
                addQuestionForm.id < 0
                ? <input type="text" name="text" value={addQuestionForm.text}     onChange={change}  size="60" className="inlineEdit"></input>
                : <>{addQuestionForm.text}</>
                }
            </td>
            <td></td>
            <td></td>
        </tr>
 };

