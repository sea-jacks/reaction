import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

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

export function updateCardSuccess(card) {
  return { type: types.UPDATE_CARD_SUCCESS, card: card };
}

export function updateCardRequest() {
  return { type: types.UPDATE_CARD_REQUEST };
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
      dispatch(fetchCardSuccess(card))
    });
  };
}

export function updateCard(card_id, card, callback) {
  return function(dispatch) {
    dispatch(updateCardRequest());
    apiClient.updateCard(card_id, card, updatedCard => {
      dispatch(updateCardSuccess(updatedCard))

      if (callback) { callback(updatedCard); }
    })
  }
}
