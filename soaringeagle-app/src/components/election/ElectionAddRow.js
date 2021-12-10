import { useForm } from '../../hooks/useForm';
//import { useState } from 'react';

export const ElectionAddRow = ( props ) => {


    //const [] = useState();

    const [ addQuestionForm, change ] = useForm ({
        id     : props.questionID,
        electionName       : props.electionName,
        text   : props.questionText,
    });

    
    /*const onAddQuestion = (questionForm) => {
        props.onQuestion({...addQuestionForm,electionName:props.electionName});
    }*/

    console.log('ROW ID ', props.rowID);
    return <tr>
            <td></td>
            <td>{
                addQuestionForm.id < 0
                ? <input key={'button1'+props.rowID} type="text" name="electionName" value={addQuestionForm.electionName}     onChange={change}  size="20" className="inlineEdit"></input>
                : ''
            }</td>
            <td>{ addQuestionForm.id < 0?<button type="button" onClick={()=>props.onQuestion(addQuestionForm)}>+</button>:''+addQuestionForm.id}</td>
            <td>{
                addQuestionForm.id < 0
                ? <input key={'input'+props.rowID}  type="text" name="text" value={addQuestionForm.text}     onChange={change}  size="60" className="inlineEdit"></input>
                : <>{addQuestionForm.text}</>
            }</td>
            <td colSpan={2}>{
                addQuestionForm.id < 0
                ?<button key={'button2'+props.rowID} type="button" onClick={()=>props.saveElection(addQuestionForm)} >Save</button>
                :''
            }</td>
        </tr>
 };

