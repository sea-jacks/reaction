import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';
import * as boardActions from './BoardActions';

export function fetchCardRequest() {
  return { type: types.FETCH_CARD_REQUEST };
}

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, card };
}

export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card: card };
}

export function createCardRequest() {
  return { type: types.CREATE_CARD_REQUEST };
}

export function createCard(card, callback) {
  return function(dispatch) {
    dispatch(createCardRequest());
    apiClient.createCard(card, newCard => {
      dispatch(createCardSuccess(newCard))

      if (callback) { callback(newCard); }
    })
  }
}

export function fetchCard(id) {
  return function(dispatch) {
    dispatch(fetchCardRequest());
    apiClient.getCard(id, card => {
      dispatch(boardActions.fetchBoard(card.board_id))
      dispatch(fetchCardSuccess(card))
    });
  };
}


// export function updateListSuccess(card) {
//   return { type: types.UPDATE_LIST_SUCCESS, card: card };
// }
//
// export function updateListRequest() {
//   return { type: types.UPDATE_LIST_REQUEST };
// }


// export function updateList(card_id, card, callback) {
//   return function(dispatch) {
//     dispatch(updateListRequest());
//     apiClient.updateList(card_id, card, updatedList => {
//       dispatch(updateListSuccess(updatedList))
//
//       if (callback) { callback(updatedList); }
//     })
//   }
// }
