import React from 'react';
import styles from './LoginModal.module.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const LoginModal = ({
  visible,
  userId,
  password,
  error,
  onCancel,
  onLogin,
  onUserIdChange,
  onPasswordChange,
  onKeyPress,
}) => (
  <ModalWrapper visible={visible}>
    <div className={cx('form')}>
      <div onClick={onCancel} className={cx('close')}>
        &times;
      </div>
      <div className={cx('title')}>로그인</div>
      <div className={cx('description')}>ID</div>
      <input
        autoFocus
        placeholder="아이디 입력"
        value={userId}
        onChange={onUserIdChange}
        onKeyPress={onKeyPress}
      />
      <div className={cx('description')}>PASSWORD</div>
      <input
        type="password"
        placeholder="비밀번호 입력"
        value={password}
        onChange={onPasswordChange}
        onKeyPress={onKeyPress}
      />
      {error && <div className={cx('error')}>로그인 실패</div>}
      <div className={cx('login')} onClick={onLogin}>
        로그인
      </div>
    </div>
  </ModalWrapper>
);

export default LoginModal;
