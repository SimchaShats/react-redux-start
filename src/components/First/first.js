import { navToPage } from '../../actions/core';

export const routes = {
  '/page/first/:count': ({ count }) => dispatch => dispatch(navToPage({ count: count, page: 'first' })),
};