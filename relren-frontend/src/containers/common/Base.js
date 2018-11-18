import React, { Component } from 'react';
import LoginModalContainer from 'containers/modal/LoginModalContainer';
import SignupModalContainer from 'containers/modal/SignupModalContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

class Base extends Component {
  initialize = async () => {
    const { BaseActions } = this.props;
    if (localStorage.logged === 'true') {
      BaseActions.tempLogin();
    }
    BaseActions.checkLogin();
  };
  componentDidMount() {
    this.initialize();
  }
  render() {
    return (
      <div>
        <LoginModalContainer />
        <SignupModalContainer />
        {/* 전역적으로 사용하는 컴포넌트들이 있다면 여기에서 렌더링합니다. */}
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
  }),
)(Base);
