export const ElectionList = (props) => {

  const { elections, onSelectElection, errorMessage } = props;

  return (
    // <h1>props.elections</h1>
    <>
      { errorMessage && <div style={{ padding:'5px', textAlign:'center', color: 'red', fontWeight: 'bold' }}>{errorMessage}</div>}
      <ul className="flex-outer">
        {elections.map(election => 
        <li key={election.id}>
          Election #{election.id}
          <button type="button" onClick={() => onSelectElection(election.id)}>
            Select
          </button>
        </li>)}
      </ul>
    </>
  );
};