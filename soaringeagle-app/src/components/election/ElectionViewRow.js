export const ElectionViewRow = ( props ) => {
    const election = props.election;
    const question = props.question;

    let ballots = election.voterIds.length;
    return <tr key='{election.id}-{question.id}'> 
            <td>{election.id}</td>
            <td>{election.electionName}</td>
            <td>{question.id}</td>
            <td>{question.text}</td>
            <td>{question.yesCount}</td>
            <td>{ballots}</td>
            {/* <td>
                <button type="button" onClick={()=>props.onEditElection(election.id)}>Edit</button> 
                <button type="button" onClick={()=>props.onDeleteElection(election.id)}>Delete</button>
            </td> */}
        </tr>
          
    
 };
