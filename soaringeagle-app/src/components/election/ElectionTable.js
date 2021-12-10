import { useElectionToolReducerStore } from "../../hooks/useElectionToolReducerStore";
import { ElectionViewRow } from "./ElectionViewRow";
import { ElectionAddRow } from "./ElectionAddRow";

export const ElectionTable = () => {
    const {
        elections, questions,errorMessage,electionName,
        boundActions: {
            onAddElection, onNewQuestion,onErrorMessage,onElectionName
            
        },
    }   = useElectionToolReducerStore();

    const onQuestion = (questionForm) => {
        if(questionForm.text.trim()){
            
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
            <table id="tbl">
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
                <tbody>
                {   elections.map(election =>
                        election.questions.map(question =>
                             <ElectionViewRow key={''+election.id+':'+question.id} election={election} question={question}    />))
                }
                
                {   questions.map((question,index) =>
                           index===0?<></>:<ElectionAddRow key={index} questionID={index} questionText={question} onQuestion={onQuestion}   />)
                    
                }  
                { questions.length>0
                    ?<ElectionAddRow key={-1.*(questions.length+1)} questionID={-1} questionText={''} electionName={electionName} onQuestion={onQuestion} saveElection={saveElection}  />
                    :<></>               
                }  
   
                </tbody>
            </table>
            <br />
            {questions.length<=0?<button type="button" onClick={()=>saveElection()}  >Create Election</button>:<></>}
        </>
        ); 
 };
