import React from 'react';
import styles from './CategoryList.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import moment from 'moment';
import removeMd from 'remove-markdown';

const cx = classNames.bind(styles);

const CategoryItem = () => {
  // const tagList = tags.map(tag => (
  //   <Link key={tag} to={`/tag/${tag}`}>
  //     #{tag}
  //   </Link>
  // ));
  return (
    <div className={cx('category-item')}>
    asdasdasd
      <h2>
      dummy
      <Link>dummy</Link>
        {/* <Link to={`/post/${id}`}>{title}</Link> */}
      </h2>
      <div className={cx('date')}>asdasd</div>
      {/* <div className={cx('date')}>{moment(publishedDate).format('ll')}</div> */}
      {/* <p>{removeMd(body)}</p> */}
      {/* <div className={cx('tags')}>{tagList}</div> */}
    </div>
  );
};

const CategoryList = () => {
  const posts = ['','','',''];
  // const categoryList = [<CategoryItem/>]
  const categoryList = posts.map(post => {
    // const { _id, title, body, publishedDate, tags } = post.toJS();
    return (
      <CategoryItem
        // title={title}
        // body={body}
        // publishedDate={publishedDate}
        // tags={tags}
        // key={_id}
        // id={_id}
      />
    );
  });
  return <div className={cx('category-list')}>{categoryList}</div>;
};

export default CategoryList;
