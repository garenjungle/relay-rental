import React from 'react';
import styles from './CategoryWrapper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CategoryWrapper = ({ children }) => (
  <div className={cx('category-wrapper')}>{children}</div>
);

export default CategoryWrapper;
