import React from 'react';
import styles from './PostInfo.module.scss';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import moment from 'moment';
import Rating from 'components/common/Rating';

const cx = classNames.bind(styles);

const PostInfo = ({ publishedDate, title, tags }) => (
  <div className={cx('post-info')}>
    <div className={cx('info')}>
      <h2>Nintendo Switch – Neon Red and Neon Blue Joy-Con</h2>
      <Rating rating='4.5' />
      <div className={cx('sub-info')}>
        <div className={cx('right-border')}>4,931 customer reviews</div>
        <div className={cx('center-border')}>756 answered questions</div>
        <div className={cx('left-border')}>{moment(publishedDate).format('ll')}</div>
      </div>
      {/* <div className={cx('tags')}>
        {// tags가 존재할 때만 map을 실행
        tags &&
          tags.map(tag => (
            <Link key={tag} to={`/tag/${tag}`}>
              #{tag}
            </Link>
          ))}
      </div> */}
    </div>
  </div>
);

export default PostInfo;
