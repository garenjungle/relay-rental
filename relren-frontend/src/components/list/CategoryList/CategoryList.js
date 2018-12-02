import React from 'react';
import styles from './CategoryList.module.scss';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import moment from 'moment';
import removeMd from 'remove-markdown';
import { List } from 'immutable';

const cx = classNames.bind(styles);

const CategoryItem = () => {
  return (
    <div className='row'>
        <div className={cx('category-item')}>
          <h2>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/img18/events/cybermonday/gw/cm_gw_DesktopGW_CYBERMONDAY_STATIC_CARD_1x_260x260._CB480371554_SY260_.jpg"/>
          {/* <Link to={`/page/1`}>dummy</Link> */}
          </h2>
          <div className={cx('date')}>asdasd</div>
        </div>
    </div>
  );
};

const CategoryList = () => {
  const posts = new List([1, 2, 3, 4]);
  posts.push("asdasd");
  posts.push("asdasd");
  posts.push("asdasd");
  posts.push("asdasd");


  console.log("posts");
  console.log({posts});

  const categoryList = posts.map(post => {
    return (
      <CategoryItem/>
    );
  });
  console.log("categoryList");
  console.log({categoryList});
  return <div className={cx('category-list')}>{categoryList}</div>;
};

export default CategoryList;
