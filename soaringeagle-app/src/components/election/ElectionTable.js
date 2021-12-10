import { useElectionToolReducerStore } from "../../hooks/useElectionToolReducerStore";
import { SORT_ASC } from '../../selectors/itemToolSelectors';
import { ElectionViewRow } from "./ElectionViewRow";
import { ElectionAddRow } from "./ElectionAddRow";

export const ElectionTable = () => {
    const {
        elections, questions,
        boundActions: {
            onEditElection, onCancelElection,
            onAddElection, onNewQuestion,
            
        },
    }   = useElectionToolReducerStore();


    const onQuestion = (questionForm) => {
        onNewQuestion(questionForm.text);
    }
    
    const saveElection = () =>{

        if(questions.length<1){
            onNewQuestion('');
        }else{
            let questionArray = [];
            for(var i=0;i<questions.length;i++){
                questionArray.push({
                    id : i+1,
                    text : questions[i],
                    yesCount: 0
                });
            }
            questionArray.shift();
            onAddElection( { 
                id: Math.max(...elections.map(c => c.id), 0 ) + 1 ,
                questions: questionArray,
                voterIds:[]
            } );
        }
    }
    console.log("QUESTIONs " , questions);

    return (  
        <>    
            <table id="tbl">
                <thead>
                <tr>
                    <th>Election</th>
                    <th>#</th>
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
                           index==0?<></>:<ElectionAddRow key={index} questionID={index} questionText={question} onQuestion={onQuestion}   />)
                    
                }  
                { questions.length>0
                    ?<ElectionAddRow key={questions.length} questionID={-1} questionText={''} onQuestion={onQuestion}   />
                    :<></>               
                }  
   
                </tbody>
            </table>
            <br />
            <button type="button" onClick={()=>saveElection()}  >Create Election</button> 
        </>
        ); 
 };
