import React from 'react';
import styles from './SignupModal.module.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const SignupModal = ({
  visible,
  userId,
  password,
  userName,
  error,
  onCancel,
  onSignup,
  onUserIdChange,
  onPasswordChange,
  onUserNameChange,
  onKeyPress,
}) => (
  <ModalWrapper visible={visible}>
    <div className={cx('form')}>
      <div onClick={onCancel} className={cx('close')}>
        &times;
      </div>
      <div className={cx('title')}>회원가입</div>
      <div className={cx('description')}>ID</div>
      <input
        autoFocus
        type="id"
        placeholder="아이디 입력"
        value={userId}
        onChange={onUserIdChange}
        onKeyPress={onKeyPress}
      />
      <div className={cx('description')}>PASSWORD</div>
      <input
        autoFocus
        type="password"
        placeholder="비밀번호 입력"
        value={password}
        onChange={onPasswordChange}
        onKeyPress={onKeyPress}
      />
      <div className={cx('description')}>NAME</div>
      <input
        autoFocus
        type="nickname"
        placeholder="닉네임 입력"
        value={userName}
        onChange={onUserNameChange}
        onKeyPress={onKeyPress}
      />
      {error && <div className={cx('error')}>회원가입 실패</div>}
      <div className={cx('signup')} onClick={onSignup}>
        회원가입
      </div>
    </div>
  </ModalWrapper>
);

export default SignupModal;
