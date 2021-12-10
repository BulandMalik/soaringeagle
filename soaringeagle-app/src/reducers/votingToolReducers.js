import { 
    SORT_ITEMS_ACTION, CANCEL_ACTION, EDIT_ACTION,
    REFRESH_VOTERS_DONE_ACTION, REGISTER_VOTER_REQUEST_ACTION,
    REPLACE_VOTER_REQUEST_ACTION, DELETE_VOTER_REQUEST_ACTION
} from '../actions/votersActions';

export const registeredVotersReducer = ( registeredVoters = [], action) => {

    //console.log("registeredVotersReducer::",registeredVoters, ", action::",action);
    switch (action.type) {
        case REFRESH_VOTERS_DONE_ACTION:
            return action.payload.registeredVoters;              
        default:
            return registeredVoters;            
    };
}

export const itemEditReducer = ( itemId = -1, action) => {

    //console.log("itemEditReducer::",itemId, ", action::",action);
    switch (action.type) {
        case REGISTER_VOTER_REQUEST_ACTION:
        case REPLACE_VOTER_REQUEST_ACTION:
        case DELETE_VOTER_REQUEST_ACTION:
        case CANCEL_ACTION:
        {
            //console.log("itemEditReducer --> -1");
            return -1;
        }
        case EDIT_ACTION:
            return action.payload.voterId;
        default:
            return itemId;            
    };
}

export const itemsSortReducer = (  itemsSort = {sortCol: 'id', sortDir: 'asc'}, action) => {

    if (action.type === SORT_ITEMS_ACTION) {

        if (itemsSort.sortDir === 'asc') {
            return { ...itemsSort, sortCol: action.payload.sortCol, sortDir: 'desc'};
        } else {
                return { ...itemsSort, sortCol: action.payload.sortCol, sortDir: 'asc'};
        }
    }
    return itemsSort;
}  
