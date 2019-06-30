import { navToReview } from '../../actions/core';

export const routes = {
  '/review': () => dispatch => dispatch(navToReview({ page: 'review' })),
  '/reset': () => dispatch => dispatch(navToReview({ page: 'review', count: 0 })),
  '/init/:init': ({ init }) => dispatch => dispatch(navToReview({ page: 'review', count: init })),
};