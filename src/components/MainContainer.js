import React from 'react';
import { connect } from 'react-redux'
import First from './First/FirstPage';
import Second from './Second/SecondPage';
import PropTypes from 'prop-types';

function MainContainer({ page }) {
  return (
    <div className="App">
      { page === 'first' && <First/> }
      { page === 'second' && <Second/> }
    </div>
  );
}

MainContainer.propTypes = {
  page: PropTypes.string.isRequired,
};

const mapStateToProps = state =>({
  page: state.getIn(['core', 'nav', 'page'], 'first'),
});

export default connect(
  mapStateToProps,
)(MainContainer)

