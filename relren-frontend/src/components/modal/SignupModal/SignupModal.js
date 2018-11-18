import React from 'react';
import styles from './SignupModal.module.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const SignupModal = ({
  visible,
  password,
  error,
  onCancel,
  onSignup,
  onChange,
  onKeyPress,
}) => (
  <ModalWrapper visible={visible}>
    <div className={cx('form')}>
      <div onClick={onCancel} className={cx('close')}>
        &times;
      </div>
      <div className={cx('title')}>회원가입</div>
      <div className={cx('description')}>회원 정보를 입력하세요</div>
      <input
        autoFocus
        type="id"
        placeholder="아이디 입력"
        value={password}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <input
        autoFocus
        type="password"
        placeholder="비밀번호 입력"
        value={password}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <input
        autoFocus
        type="nickname"
        placeholder="닉네임 입력"
        value={password}
        onChange={onChange}
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
