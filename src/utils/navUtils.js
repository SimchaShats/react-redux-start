export const goToPage = ({ page, count = 0 }) => {
  window.location.assign(`#/page/${page}/${count}`);
};