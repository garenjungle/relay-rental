import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Header = ({ postId, logged, onRemove }) => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
      <div className={cx('brand')}>
        <Link to="/">RelayRental.com</Link>
      </div>
      <form
        accept-charset="utf-8"
        action="/s/ref=nb_sb_noss"
        className={cx('nav-searchbar')}
        method="GET"
        name="site-search"
        role="search"
      >
        <div className={cx('nav-fill')}>
          <input
            type="text"
            id="twotabsearchtextbox"
            value=""
            name="field-keywords"
            autocomplete="off"
            placeholder=""
            className={cx('nav-input')}
            dir="auto"
            tabindex="19"
          />
        </div>
        <div className={cx('nav-right')}>
          <button className={cx('button')}>Search</button>
        </div>
      </form>
      {logged && (
        <div className={cx('right')}>
          {// flex를 유지하려고 배열 형태로 렌더링합니다.
          postId && [
            <Button key="edit" theme="outline" to={`/editor?id=${postId}`}>
              Modify
            </Button>,
            <Button key="remove" theme="outline" onClick={onRemove}>
              Delete
            </Button>,
          ]}
          {/* <Button theme="outline" to="/editor">
            New Post
          </Button> */}
        </div>
      )}
    </div>
    <div className={cx('nav-main')}>
      <div />
      <div />
      {/* <div>Today's deal</div>
      <div>Shipping</div>
      <div>Payment</div> */}
      <div>
        <Link to="/order">Your order</Link>
      </div>
      <div>
        <Link to="/form">Sell</Link>
      </div>
      <div />
      <div />
      <div />
      <div>Contact</div>
      <div />
      <div />
    </div>
  </header>
);

export default Header;
