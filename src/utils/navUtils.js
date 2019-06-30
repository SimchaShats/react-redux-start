
const buildURL = ({ page, inc, init }) => {
  let url = `#/${page}`;
  if (page === 'edit' && inc) {
    return url += `/${inc}`;
  }
  if (page === 'review' && init) {
    return url += `/${init}`;
  }
  return url;
};

export const goToPage = ({ page, inc, init }) => {
  window.location.assign(buildURL({ page, inc, init }));
};