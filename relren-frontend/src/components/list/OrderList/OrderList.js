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
    {url:'https://m.media-amazon.com/images/I/917LEZ+it3L._AC_SX200_SY200_.jpg',
      text: "Drawings me opinions returned absolute in. Friend are day own either lively new. ",
      title: "Camera"
    },
    {url:'https://images-na.ssl-images-amazon.com/images/I/41Cv21vkL9L._AC_SY200_.jpg',
      text: "Otherwise therefore sex did are unfeeling something. Certain be ye amiable by exposed so. ",
      title: "Headset"
    },
    {url:'https://images-na.ssl-images-amazon.com/images/I/51I%2BteGzpCL._AC_SY200_.jpg',
      text: "Coming either suffer living her gay theirs. Furnished do otherwise daughters contented conveying attempted no.",
      title: "Joystick"
    },
    {url:'https://images-na.ssl-images-amazon.com/images/I/41Cq%2BW%2BIooL._AC_SY200_.jpg',
      text: "Friend are day own either lively new. ",
      title: "Laptop"
    },
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