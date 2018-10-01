import { handleActions } from 'redux-actions';
import DataApi from 'api/dataApi';
import Actions from '../actions';
import Immutable, { List } from 'immutable';



export const TIME_STEP = 100; // milliseconds

export function startPolling(fn) {
  setInterval(fn,  TIME_STEP);
}

export function createAsyncAction(type, fn) {
  return (...args) => async (dispatch) => {
    dispatch({
      type,
      payload: args,
    });
    let result;
    try {
      result = await fn(...args);
    } catch (error) {
      dispatch({
        type: `${type}_ERROR`,
        error: true,
        payload: error,
      });
      throw error;
    }
    dispatch({
      type: `${type}_SUCCESS`,
      payload: result,
    });
    return result;
  };
}

export const fetchItem = createAsyncAction(Actions.FETCH_DATAPOINT, () =>
  DataApi.getItem().then(
    (response) => {
      if (response.error) {
        return null;
      }
      return response;
    },
    (error) => {
      throw error;
    },
  ),
);

export const actions = {
  fetchItem
};

export const reducers = {
  [Actions.FETCH_DATAPOINT]: (state) => state,
  [Actions.FETCH_DATAPOINT_SUCCESS]: (state, { payload }) => ({
    ...state,
    items: state.items.push(payload).slice(-1000)
  }),
  [Actions.FETCH_DATAPOINT_ERROR]: (state) => state
};

export const initialState = {
  items: new List()
};

export default handleActions(reducers, initialState);
