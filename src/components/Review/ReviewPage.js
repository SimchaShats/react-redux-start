import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { goToPage } from '../../utils/navUtils';
import PropTypes from 'prop-types';
import './ReviewPage.css';

class Review extends PureComponent {
  static propTypes = {
    testMeCount: PropTypes.number.isRequired,
  };

  goToPageFirst = () => goToPage({ page: 'edit' });

  render() {
    const { testMeCount } = this.props;
    return (
      <div className='ReviewContainer'>
        <div> Your count is { testMeCount } </div>
        <button onClick={ this.goToPageFirst }>Go to Edit Page</button>
      </div>
    );
  }
}


const mapStateToProps = state =>({
  testMeCount: state.getIn(['core', 'testMe', 'count'], 0),
});

export default connect(
  mapStateToProps,
)(Review)
