export default function cardsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const { lists, ...newBoardWithoutLists } = action.board;
    const excludedLists = state.filter(list => list.board_id !== action.board.id);

    const excludedCards = excludedLists.reduce((acc, list) => acc.concat(list.cards), []);
    const newCards = lists.reduce((acc, list) => acc.concat(list.cards), []);
    return excludedCards.concat(newCards);
  } else if (action.type === 'CREATE_CARD_SUCCESS') {
    return state.concat(action.card);
  } else {
    return state;
  }
}
