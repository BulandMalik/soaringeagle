

/*
export const all = () => {
    return fetch("http://localhost:3060/colors")
    .then( res => res.json()) //res.json is an async vs JSON.parse is a sync process, res.json() not using main thread
};
*/

export const all = async () => {
    //await in front of calls retuning promises
    const res = await fetch("http://localhost:3060/voters");
    const colors = await res.json(); //res.json is an async vs JSON.parse is a sync process, res.json() not using main thread
    return colors;
};

export const one = async (voterId) => {
    //await in front of calls retuning promises
    const res = await fetch(`http://localhost:3060/voters/${voterId}`);
    const registeredVoter = await res.json(); //res.json is an async vs JSON.parse is a sync process, res.json() not using main thread
    return registeredVoter;
};

export const registerVoter = async (voter) => {
    try {
        const res = await fetch("http://localhost:3060/voters", { //options obj
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify( voter ),
      });
      const newVoter = await res.json();
      return newVoter;    
    }
    catch {
        //handle errors
    }
}

export const replaceVoter = async (voter) => {
    const res = await fetch(`http://localhost:3060/voters/${voter.id}`, { //options obj
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify( voter ),
    });

    const updatedVoter = await res.json();
    return updatedVoter;
}

export const deleteVoter = async (voterId) => {

    const res = await fetch(`http://localhost:3060/voters/${encodeURIComponent(voterId)}`, { //options obj
        method: 'DELETE',
    });

    return await res.json();
}


export const deleteVoters = (voterIds) => {

    //let returnIds = [];
    let promises = [];
    voterIds.forEach(voterId => {
        promises.push(new Promise( (resolve, reject) => {
            fetch(`http://localhost:3060/voters/${encodeURIComponent(voterId)}`, { 
                method: 'DELETE',
            }).then( res => resolve(res) );            
        }));
    });
    //console.log("***************** promises ",promises,"");
    return Promise.all(promises);
}
/*
export const deleteVoters = (voterIds) => {

    //let returnIds = [];
    //voterIds.forEach(voterId => async () => {
    const promise = voterIds.map( async voterId => {
        const res = await fetch(`http://localhost:3060/voters/${encodeURIComponent(voterId)}`, { 
            method: 'DELETE',
        });

        const r = res.json();
        console.log("deleting voterid[",voterId,"], response [",r,"]");
        return voterId;
    });

    console.log("***************** voterIds ",promise,"");
    return promise;
}*/