import React from 'react';
import styles from './OrderList.module.scss';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import moment from 'moment';
import removeMd from 'remove-markdown';
import { List } from 'immutable';

const cx = classNames.bind(styles);

const OrderItem = ({url,title,content}) => {
  console.log('OrderItem')
  console.log(url);
  return (
    <div className='row'>
        <div className={cx('category-item')}>
          <h3>
            {title}
          </h3>
          <Link to={`/post/1`}>
              <img src={url}/>
          </Link>
          <div className={cx('date')}>
           {content}
          </div>
        </div>
    </div>
  );
};

const OrderList = () => {
  const posts = new List([
    {url:'https://images-na.ssl-images-amazon.com/images/I/61ecsEuu6-L._AC_.jpg',
      text: "RESERVED",
      title: "Nintendo Switch"
    },
    {url:'https://images-na.ssl-images-amazon.com/images/I/41Cv21vkL9L._AC_SY200_.jpg',
      text: "ON DELIVERY",
      title: "Headset x1"
    }
   ]);

   const orderList = posts.map(post => {
    return (
      <OrderItem url={post.url} title={post.title} content={post.text}/>
    );
  });


  return (
    <div>
      <div className={cx('category-list')}>{orderList}</div>
    </div>
  );
};

export default OrderList;