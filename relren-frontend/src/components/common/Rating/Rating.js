import React from 'react';
import styles from './Rating.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Rating = ({ rating }) => {
  return (
    <div className={cx('rating')}>
    <img src="https://cdn4.iconfinder.com/data/icons/free-social-media-icons/512/Star.png"/>
    {rating}
    </div>
  );
};

export default Rating;
