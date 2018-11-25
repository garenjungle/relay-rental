import React, { Component } from 'react';
import LoginModal from 'components/modal/LoginModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

class LoginModalContainer extends Component {
  handleLogin = async () => {
    const { BaseActions, userId, password } = this.props;
    try {
      // 로그인 시도, 성공하면 모달 닫기
      await BaseActions.login(userId, password);
      BaseActions.hideModal('login');
      localStorage.logged = 'true';
    } catch (e) {
      console.log(e);
    }
  };
  handleCancel = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('login');
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
  handleKeyPress = e => {
    // 엔터키를 누르면 로그인 호출
    if (e.key === 'Enter') {
      this.handleLogin();
    }
  };
  render() {
    const { handleLogin, handleCancel, handleUserIdChange, handlePasswordChange, handleKeyPress } = this;
    const { visible, error, password, userId } = this.props;
    return (
      <LoginModal
        onLogin={handleLogin}
        onCancel={handleCancel}
        onUserIdChange={handleUserIdChange}
        onPasswordChange={handlePasswordChange}
        onKeyPress={handleKeyPress}
        visible={visible}
        error={error}
        userId={userId}
        password={password}
      />
    );
  }
}

export default connect(
  state => ({
    visible: state.base.getIn(['modal', 'login']),
    userId: state.base.getIn(['userModal', 'userId']),
    password: state.base.getIn(['userModal', 'password']),
    error: state.base.getIn(['userModal', 'error']),
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
  }),
)(LoginModalContainer);
