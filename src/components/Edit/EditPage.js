import React, { useCallback, } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addTestMeCount } from '../../actions/core';
import { goToPage } from '../../utils/navUtils';
import PropTypes from 'prop-types';
import './EditPage.css';

const EditPage = React.memo(({ testMeCount, inc }) => {
  const dispatch = useDispatch();

  // Example of memoization (good to read: https://kentcdodds.com/blog/usememo-and-usecallback)
  const incrementTestMeCounter = useCallback(
    () => dispatch(addTestMeCount({ count: testMeCount + inc })),
    [dispatch, testMeCount, inc]
  );

  return <div className='EditContainer'>
    <button onClick={ incrementTestMeCounter }>Test me +{ inc } ({ testMeCount })</button>
    <button onClick={ () => goToPage({ page: 'review' }) }>Go to Review Page</button>
  </div>
});

EditPage.propTypes = {
  testMeCount: PropTypes.number.isRequired,
  inc: PropTypes.number.isRequired,
};

const mapStateToProps = state =>({
  testMeCount: state.getIn(['core', 'testMe', 'count']) || 0,
  inc: state.getIn(['core', 'testMe', 'inc']) || 1,
});

export default connect(
  mapStateToProps,
)(EditPage)
