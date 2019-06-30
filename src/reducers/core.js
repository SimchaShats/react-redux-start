import { Map } from 'immutable';

const initialState = Map();

const core = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TEST_ME_COUNT':
      return state.setIn(['testMe', 'count'], action.count || 0);
    case 'NAV_TO_EDIT':
      return state.setIn(['testMe', 'inc'], parseInt(action.inc || 1))
        .setIn(['nav', 'page'], action.page);
    case 'NAV_TO_REVIEW':
      state = state.setIn(['nav', 'page'], action.page);
      if (action.count !== undefined) {
        return state.setIn(['testMe', 'count'], parseInt(action.count))
      }
      return state;
    default:
      return state
  }
};

export default core;