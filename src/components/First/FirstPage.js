import React, { useCallback, Fragment } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addTestMeCount } from '../../actions/core';
import { goToPage } from '../../utils/navUtils';
import PropTypes from 'prop-types';

const FirstPage = React.memo(({ testMeCount }) => {
  const dispatch = useDispatch();

  // Example of memoization (good to read: https://kentcdodds.com/blog/usememo-and-usecallback)
  const incrementTestMeCounter = useCallback(
    () => dispatch(addTestMeCount({ count: testMeCount + 1 })),
    [dispatch, testMeCount]
  );

  return <Fragment>
    <button onClick={ incrementTestMeCounter }>Test me +1 ({ testMeCount })</button>
    <button onClick={ () => goToPage({ page: 'second' }) }>Go to Second Page</button>
  </Fragment>
});

FirstPage.propTypes = {
  testMeCount: PropTypes.number.isRequired,
};

const mapStateToProps = state =>({
  testMeCount: state.getIn(['core', 'testMe', 'count'], 0),
});

export default connect(
  mapStateToProps,
)(FirstPage)
