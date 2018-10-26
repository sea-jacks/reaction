export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const { lists, ...newBoardWithoutLists } = action.board;
    const excludedLists = state.filter(list => list.board_id !== action.board.id);
    const listsWithoutCards = lists.map(list => {
      const { cards, ...listWithoutCards } = list;
      return listWithoutCards;
    });
    return excludedLists.concat(listsWithoutCards);
  } else if (action.type === 'UPDATE_LIST_SUCCESS') {
    const { cards, ...listWithoutCards } = action.list;
    const excludedLists = state.filter(list => list.id !== action.list.id);
    return excludedLists.concat(listWithoutCards);
  } else {
    return state;
  }
}

