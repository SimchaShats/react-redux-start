import React, { useCallback, Fragment } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addTestMeCount } from '../../actions/core';
import { goToPage } from '../../utils/navUtils';
import PropTypes from 'prop-types';

const FirstPage = React.memo(({ testMeCount }) => {
  const dispatch = useDispatch();

  const incrementTestMeCounter = useCallback(
    () => dispatch(addTestMeCount({ count: testMeCount + 1 })),
    [dispatch, testMeCount]
  );

  const goToPageFirst = useCallback(
    () => goToPage({ page: 'second' }),
    []
  );

  return <Fragment>
    <button onClick={ incrementTestMeCounter }>Test me +1 ({ testMeCount })</button>
    <button onClick={ goToPageFirst }>Go to Second Page</button>
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
