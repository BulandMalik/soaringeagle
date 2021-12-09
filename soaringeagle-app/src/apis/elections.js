let baseURL = 'http://localhost:3060/elections';
export const all = async () => {
    try {
      const res = await fetch(baseURL)
      const elections = await res.json();
      return elections;
    } catch(err) {
      console.log(err);
    }
  };

export const add = async (election) => {
  const res = await fetch(baseURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(election)
  });
  const newElection = await res.json;
  return newElection;
}

export const update = async (election) => {
  const res = await fetch(baseURL+`/${encodeURIComponent(election.id)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(election)
  });
  const updatedElection = await res.json;
  return updatedElection;
}

export const remove = async (electionId) => {
  const res = await fetch(baseURL+`/${encodeURIComponent(electionId)}`, {
    method: 'DELETE'
  });
  return;
}
