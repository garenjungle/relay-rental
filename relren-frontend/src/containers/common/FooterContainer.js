import React, { Component } from 'react';
import Footer from 'components/common/Footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

class FooterContainer extends Component {
  handleLoginClick = async () => {
    const { BaseActions, logged, userId } = this.props;
    if (logged) {
      try {
        await BaseActions.logout(userId);
        window.location.reload(); // 페이지 새로고침
      } catch (e) {
        console.log(e);
      }
      return;
    }
    BaseActions.showModal('login');
    BaseActions.initializeUserModal();
  };

  handleSignupClick = async () => {
    const { BaseActions, logged, userId } = this.props;
    if (logged) {
      try {
        await BaseActions.logout(userId);
        window.location.reload(); // 페이지 새로고침
      } catch (e) {
        console.log(e);
      }
      return;
    }
    BaseActions.showModal('signup');
    BaseActions.initializeUserModal();
  };

  render() {
    const { handleLoginClick } = this;
    const { handleSignupClick } = this;
    const { logged } = this.props;

    return <Footer onLoginClick={handleLoginClick} onSignupClick={handleSignupClick} logged={logged} />;
  }
}

export default connect(
  state => ({
    logged: state.base.get('logged'),
    userId: state.base.getIn(['userModal', 'userId']),
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
  }),
)(FooterContainer);
