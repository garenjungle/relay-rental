import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Footer = ({ onLoginClick, onSignupClick, logged }) => (
  <footer className={cx('footer')}>
    <Link to="/" className={cx('brand')}>
      reactblog
    </Link>
    <div onClick={onLoginClick} className={cx('admin-login')}>
      {logged ? '로그아웃' : '로그인'}
    </div>
    <div onClick={onSignupClick} className={cx('admin-login')}>
      {logged ? null : '회원가입'}
    </div>
  </footer>
);

export default Footer;
