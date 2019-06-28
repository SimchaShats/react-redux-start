import { navToPage } from '../../actions/core';

export const routes = {
  '/page/second/:count': ({ count }) => dispatch => dispatch(navToPage({ count: count, page: 'second' })),
};