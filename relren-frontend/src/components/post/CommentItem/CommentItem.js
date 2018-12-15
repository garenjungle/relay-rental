import React from 'react';
import styles from './CommentItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const CommentItem = ({ _id, title, body, publishedDate, tags }) => {
  return (
    <div className={cx('comment-item')}>
        <div className={cx('comment-header')}>
          <Link to='/'><h5>{_id}</h5></Link>
          <div className={cx('comment-date')}>
            {publishedDate}
          </div>
        </div>
        <div className={cx('comment-body')}>
          {body}
        </div>
    </div>
  );
};

export default CommentItem;
