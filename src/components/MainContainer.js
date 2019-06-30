import React from 'react';
import { connect } from 'react-redux'
import EditPage from './Edit/EditPage';
import ReviewPage from './Review/ReviewPage';
import PropTypes from 'prop-types';

function MainContainer({ page }) {
  return (
    <div className='App'>
      { page === 'edit' && <EditPage/> }
      { page === 'review' && <ReviewPage/> }
    </div>
  );
}

MainContainer.propTypes = {
  page: PropTypes.string.isRequired,
};

const mapStateToProps = state =>({
  page: state.getIn(['core', 'nav', 'page']) || 'edit',
});

export default connect(
  mapStateToProps,
)(MainContainer)

