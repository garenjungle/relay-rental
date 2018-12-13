import React from 'react';
import styles from './PostQnA.module.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const PostQnA = () => (
  <div className={cx('post-QnA')}>
    <h2>Customer comments</h2>
    <form accept-charset="utf-8" action="/s/ref=nb_sb_noss" className={cx('comment-form')} method="GET" >
      <div className={cx('comment')}>
        <textarea type="text" className={cx('comment-input')} />
      </div>
      <div className={cx("comment-button")}>
        <Button theme="default" to="/">
          Send
        </Button>
      </div>
    </form>
  </div>
);

export default PostQnA;
