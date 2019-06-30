export const addTestMeCount = ({ count }) => ({
  type: 'ADD_TEST_ME_COUNT',
  count,
});

export const navToEdit = ({ inc, page }) => ({
  type: 'NAV_TO_EDIT',
  page,
  inc,
});

export const navToReview = ({ count, page }) => ({
  type: 'NAV_TO_REVIEW',
  page,
  count,
});