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