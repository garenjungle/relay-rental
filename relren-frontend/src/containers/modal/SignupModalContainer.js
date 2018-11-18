import React, { Component } from 'react';
import SignupModal from 'components/modal/SignupModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

class SignupModalContainer extends Component {
  handleSignup = async () => {
    const { BaseActions, password } = this.props;
    try {
      // 로그인 시도, 성공하면 모달 닫기
      await BaseActions.signup(password);
      BaseActions.hideModal('signup');
      localStorage.logged = 'true';
    } catch (e) {
      console.log(e);
    }
  };
  handleCancel = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('signup');
  };
  handleChange = e => {
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changePasswordInput(value);
  };
  handleKeyPress = e => {
    // 엔터키를 누르면 로그인 호출
    if (e.key === 'Enter') {
      this.handleSignup();
    }
  };
  render() {
    const { handleSignup, handleCancel, handleChange, handleKeyPress } = this;
    const { visible, error, password } = this.props;
    return (
      <SignupModal
        onSignup={handleSignup}
        onCancel={handleCancel}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        visible={visible}
        error={error}
        password={password}
      />
    );
  }
}

export default connect(
  state => ({
    visible: state.base.getIn(['modal', 'signup']),
    password: state.base.getIn(['signupModal', 'password']),
    error: state.base.getIn(['signupModal', 'error']),
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
  }),
)(SignupModalContainer);
