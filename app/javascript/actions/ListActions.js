import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function updateListSuccess(list) {
  return { type: types.UPDATE_LIST_SUCCESS, list: list };
}

export function updateListRequest() {
  return { type: types.UPDATE_LIST_REQUEST };
}

export function updateList(list_id, list, callback) {
  return function(dispatch) {
    dispatch(updateListRequest());
    apiClient.updateList(list_id, list, updatedList => {
      dispatch(updateListSuccess(updatedList))

      if (callback) { callback(updatedList); }
    })
  }
}
