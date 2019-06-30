import { navToEdit } from '../../actions/core';

export const routes = {
  '/edit/:inc': ({ inc }) => dispatch => dispatch(navToEdit({ page: 'edit', inc })),
  '/edit': () => dispatch => dispatch(navToEdit({ page: 'edit', inc: 0 })),
};