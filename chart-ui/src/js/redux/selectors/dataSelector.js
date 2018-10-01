import { createSelector } from 'reselect';
// READ: https://github.com/reactjs/reselect

const selfSelector = createSelector(
  state => state.data,
  state => state,
);
const DataSelector = state => selfSelector(state);

export default DataSelector;
