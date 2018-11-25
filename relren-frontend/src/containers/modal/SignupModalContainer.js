import React, { Component } from 'react';
import SignupModal from 'components/modal/SignupModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

class SignupModalContainer extends Component {
  handleSignup = async () => {
    const { BaseActions, userId, password, userName } = this.props;
    try {
      // 로그인 시도, 성공하면 모달 닫기
      await BaseActions.signup(userId, password, userName);
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
  handleUserIdChange = e => {
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changeIdInput(value);
  };
  handlePasswordChange = e => {
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changePasswordInput(value);
  };
  handleUserNameChange = e => {
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changeUserNameInput(value);
  };
  handleKeyPress = e => {
    // 엔터키를 누르면 로그인 호출
    if (e.key === 'Enter') {
      this.handleSignup();
    }
  };
  render() {
    const { handleSignup, handleCancel, handleUserIdChange, handlePasswordChange, handleUserNameChange, handleKeyPress } = this;
    const { visible, error, userId, password, userName } = this.props;
    return (
      <SignupModal
        onSignup={handleSignup}
        onCancel={handleCancel}
        onUserIdChange={handleUserIdChange}
        onPasswordChange={handlePasswordChange}
        onUserNameChange={handleUserNameChange}
        onKeyPress={handleKeyPress}
        visible={visible}
        error={error}
        userId={userId}
        password={password}
        userName={userName}
      />
    );
  }
}

export default connect(
  state => ({
    visible: state.base.getIn(['modal', 'signup']),
    userId: state.base.getIn(['userModal', 'userId']),
    password: state.base.getIn(['userModal', 'password']),
    userName: state.base.getIn(['userModal', 'userName']),
    error: state.base.getIn(['userModal', 'error']),
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
  }),
)(SignupModalContainer);
