export default function commentsReducer(state = [], action) {
  if (action.type === 'FETCH_CARD_SUCCESS') {
    const { comments, ...newCardWithoutcomments } = action.card;
    const excludedcomments = state.filter(comment => comment.card_id !== action.card.id);
    return excludedcomments.concat(comments);
  } else {
    return state;
  }
}

