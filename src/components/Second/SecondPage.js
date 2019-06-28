import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { addTestMeCount, } from '../../actions/core';
import { goToPage } from '../../utils/navUtils';
import PropTypes from 'prop-types';

class SecondPage extends PureComponent {
  static propTypes = {
    testMeCount: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  incrementTestMeCounter = () => {
    const { dispatch, testMeCount } = this.props;
    dispatch(addTestMeCount({ count: testMeCount + 10 }));
  };

  goToPageSecond = () => goToPage({ page: 'first' })

  render() {
    const { testMeCount } = this.props;
    return (
      <Fragment>
        <button onClick={ this.incrementTestMeCounter }>Test me +10 ({ testMeCount })</button>
        <button onClick={ this.goToPageSecond }>Go to First Page</button>
      </Fragment>
    );
  }
}


const mapStateToProps = state =>({
  testMeCount: state.getIn(['core', 'testMe', 'count'], 0),
});

export default connect(
  mapStateToProps,
)(SecondPage)
