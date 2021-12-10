export const SORT_ASC = 'asc';
export const SORT_DESC = 'desc';
const defaultSortItems = (unsortedItems, sortCol, sortDir) => {
    console.log("unsortedItems:",unsortedItems, " ...sortCol:",sortCol, " ...sortDir:",sortDir);
    const items = [ ...unsortedItems ];
    return items.sort((a, b) => {
      if (a[sortCol] < b[sortCol]) {
        return sortDir === 'asc' ? -1 : 1;
      }
      if (a[sortCol] > b[sortCol]) {
        return sortDir === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };
  
  export const sortedItemsSelector = state => {
    return defaultSortItems(
      state.registeredVoters, state.itemsSort.sortCol, state.itemsSort.sortDir);
  };

  export const sortedElectionSelectors = state => {
    return state.elections
    //return defaultSortItems(state.elections, state.electionsSort.sortCol, state.electionsSort.sortDir );
  }


