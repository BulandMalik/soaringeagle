import { useElectionToolReducerStore } from "../../hooks/useElectionToolReducerStore";
import { ElectionViewRow } from "./ElectionViewRow";
import { ElectionAddRow } from "./ElectionAddRow";
import { ElectionNone } from "./ElectionNone";
export const ElectionTable = () => {
    const {
        elections, questions,errorMessage,electionName,
        boundActions: {
            onAddElection, onNewQuestion,onErrorMessage,onElectionName
            
        },
    }   = useElectionToolReducerStore();

    const onQuestion = (questionForm) => {
        if(questionForm.text.trim()){
            onElectionName(questionForm.electionName);
            onNewQuestion(questionForm.text);
        }else{
            onErrorMessage('No Question was entered');
        }
    }
    
    const saveElection = (questionForm) =>{

        if(!questionForm){
            onNewQuestion('');
        }else{
            if(!questionForm.text.trim()){
                onErrorMessage('No Question was entered');
            }else{
                let questionArray = [];
                let myQuestion=[...questions,questionForm.text]
                for(var i=0;i<myQuestion.length;i++){
                    questionArray.push({
                        id : i,
                        text : myQuestion[i],
                        yesCount: 0
                    });
                }
                questionArray.shift();
                onAddElection( { 
                    id: Math.max(...elections.map(c => c.id), 0 ) + 1 ,
                    electionName:questionForm.electionName,
                    questions: questionArray,
                    voterIds:[]
                } );
            }

        }
    }
    //console.log("QUESTIONs " , questions);
    
    return (  
        <>    
            {errorMessage===''?<></>:<h1 style={{color:'red'}} >{errorMessage}</h1>}
            <table className="blueTable">
                <thead>
                <tr>
                    <th>Election #</th>
                    <th>Election </th>
                    <th>Question #</th>
                    <th>Question</th>
                    <th>Yays</th>
                    <th>Ballots</th>
                </tr>
                </thead>
                <tbody>{elections.map(election =>
                        election.questions.map(question =>
                             <ElectionViewRow key={''+election.id+':'+question.id} election={election} question={question}    />))
                }{questions.map((question,index) =>
                           index===0?<ElectionNone key={'newQuestion'+index} />:<ElectionAddRow key={'newQuestion'+index} rowID={index} questionID={index} questionText={question}   />)
                    
                }{questions.length>0
                    ?<ElectionAddRow key={'addRow'+questions.length} rowID={questions.length} questionID={-1} questionText={''} electionName={electionName} onQuestion={onQuestion} saveElection={saveElection}  />
                    :<ElectionNone key={'addRow'+questions.length} />             
                }</tbody>
            </table>
            <br />
            {questions.length<=0?<button key={'createElection'+questions.length} type="button" onClick={()=>saveElection()}  >Create Election</button>:<></>}
        </>
        ); 
 };
