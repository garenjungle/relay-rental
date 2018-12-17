import React from 'react';
import styles from './OrderWrapper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const OrderWrapper = ({ children }) => (
  <div className={cx('category-wrapper')}>{children}</div>
);

export default OrderWrapper;
