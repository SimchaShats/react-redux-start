import { Map } from 'immutable';

const initialState = Map();

const core = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TEST_ME_COUNT':
      return state.setIn(['testMe', 'count'], action.count || 0);
    case 'NAV_TO_PAGE':
      return state.setIn(['testMe', 'count'], parseInt(action.count || 0))
        .setIn(['nav', 'page'], action.page);
    default:
      return state
  }
};

export default core;