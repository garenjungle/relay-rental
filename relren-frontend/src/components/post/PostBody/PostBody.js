import React from 'react';
import styles from './PostBody.module.scss';
import classNames from 'classnames/bind';
import MarkdownRender from 'components/common/MarkdownRender';

const cx = classNames.bind(styles);

const PostBody = ({ body }) => (
  <div className={cx('post-body')}>
    <div className={cx('paper')}>
      <div className={cx('left')}>
        <img src="https://images-na.ssl-images-amazon.com/images/I/71ivrWiYkLL._AC_.jpg"/>
        <div className={cx('little')}>
          <img src="https://images-na.ssl-images-amazon.com/images/I/71ivrWiYkLL._AC_.jpg"/>
          <img src="https://images-na.ssl-images-amazon.com/images/I/61ecsEuu6-L._AC_.jpg"/>
          <img src="https://images-na.ssl-images-amazon.com/images/I/71tdXgn9LzL._AC_.jpg"/>
          <img src="https://images-na.ssl-images-amazon.com/images/I/617jLYKWctL._AC_.jpg"/>
        </div>
      </div>
      <div className={cx('right')}>
        {/* {body} */}
        <div className={cx('space')}>$<strong>299</strong>.99</div>
        <div className={cx('space')}>State : Available</div>
        <div className={cx('space')}>Min term : 3 month</div>
        <div className={cx('space')}>Writer : reiui9@naver.com </div>
        <div className={cx('last')}><button>Reservation</button></div>
        {/* <MarkdownRender markdown={body} /> */}
      </div>
    </div>
    <div className={cx('about')}>
      <strong>About Product</strong>
      <li>
        Nintendo Switch console, Nintendo Switch dock, Joy-Con (L) and Joy-Con (R), and Two Joy-Con strap accessories
      </li>
      <li>
        One Joy-Con grip, HDMI cable, and Nintendo Switch AC adapter
      </li>
    </div>
  </div>
);

export default PostBody;
