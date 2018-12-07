import React from 'react';
import styles from './PostList.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import moment from 'moment';
import removeMd from 'remove-markdown';
import { List } from 'immutable';

const cx = classNames.bind(styles);

// const PostItem = ({ title, body, publishedDate, tags, id }) => {
//   const tagList = tags.map(tag => (
//     <Link key={tag} to={`/tag/${tag}`}>
//       #{tag}
//     </Link>
//   ));
//   return (
    // <div className={cx('post-item')}>
    //   <h2>
    //     <Link to={`/post/${id}`}>{title}</Link>
    //   </h2>
    //   <div className={cx('date')}>{moment(publishedDate).format('ll')}</div>
    //   <p>{removeMd(body)}</p>
    //   <div className={cx('tags')}>{tagList}</div>
    // </div>
//   );
// };

const PostItem = ({url,title,content,category}) => {
  return (
    <div className={cx('post-item')}>
    
      <div className={cx('left')}>
        <Link to={`/post/1`}>
          <img src={url}/>
        </Link>
      </div>
      <div className={cx('right')}>
        <h2>
          <Link to={`/post/1`}>{title}</Link>
        </h2>
        <div className={cx('category')}>{category}</div>
        <div className={cx('address')}><strong>수원시</strong> 영통구 원천동</div>
        <div className={cx('specific')}>
          <div>
            <div className={cx('price')}>100$<strong>/day</strong></div>
            <p>{content}</p>
          </div>
          <div>
            <div className={cx('term')}><strong>Min</strong> 3 month</div>
            <div className={cx('tags')}>
              <img src="data:image/png;base64,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"/>
              4.35
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

const ResultBar = () => {
  return (
    <div className={cx('s-result-info-bar-content')}>
      <div className={cx('s-result-info-bar-first')}>
        <div class="s-first-column">
          <div class="a-section a-spacing-small a-spacing-top-small">
            <span id="s-result-count">1-16 of over 6,000 results for
              <span>
                <span class="a-color-state a-text-bold">Amazon Renewed: Laptops &amp; Computers</span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className={cx('s-result-info-bar-second')}>
        <div class="a-row a-spacing-micro a-spacing-top-micro">
          <div class="s-last-column">
            <form id="searchSortForm" method="get" action="/s/ref=lp_18332383011_st" class="s-inline-form a-spacing-none">
              <input type="hidden" name="srs" value="18332383011"/>
                <input type="hidden" name="rh" value="i:specialty-aps"/>
                  <input type="hidden" name="qid" value="1544167050"/>
                    <span id="sort_by_text" class="a-size-base">Sort by&nbsp;</span>
                    <select class="a-spacing-top-mini" name="sort" id="sort" onchange="this.form.submit();" aria-labelledby="sort_by_text">
                      <option value="relevanceblender">Featured</option>
                      <option value="price-asc-rank">Price: Low to High</option>
                      <option value="price-desc-rank">Price: High to Low</option>
                      <option value="review-rank">Avg. Customer Review</option>
                      <option value="date-desc-rank">Newest Arrivals</option>
                    </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const PostList = ({ posts }) => {
  posts = new List([
    {url:'https://m.media-amazon.com/images/I/917LEZ+it3L._AC_SX200_SY200_.jpg',
      text: "Drawings me opinions returned absolute in. Friend are day own either lively new. ",
      title: "Canon PowerShot SX530 HS Digital Camera with 50x Optical Image Stabilized Zoom with 3-Inch LCD HD 1080p Video (Black)+ Extra Battery + 24GB Class 10 Card Complete Deluxe Accessory Bundle And Much More",
      category: "Camera"
    },
    {url:'https://images-na.ssl-images-amazon.com/images/I/41Cv21vkL9L._AC_SY200_.jpg',
      text: "Otherwise therefore sex did are unfeeling something. Certain be ye amiable by exposed so. ",
      title: "Bose QuietComfort 35 (Series II) Wireless Headphones, Noise Cancelling, with Alexa voice control - Black",
      category: "Camera"
    },
    {url:'https://images-na.ssl-images-amazon.com/images/I/51I%2BteGzpCL._AC_SY200_.jpg',
      text: "Coming either suffer living her gay theirs. Furnished do otherwise daughters contented conveying attempted no.",
      title: "Extreme 3D Pro Joystick for Windows",
      category: "Joystick"
    },
    {url:'https://images-na.ssl-images-amazon.com/images/I/41Cq%2BW%2BIooL._AC_SY200_.jpg',
      text: "Friend are day own either lively new. ",
      title: "Apple MacBook Air (13-inch Retina display, 1.6GHz dual-core Intel Core i5, 256GB) - Gold (Latest Model)",
      category: "Laptop"
    },
   ]);
  const postList = posts.map(post => {
    return (
      <PostItem url={post.url} title={post.title} content={post.text} category={post.category}/>
    );
  });

  // const postList = posts.map(post => {
  //   const { _id, title, body, publishedDate, tags } = post.toJS();
  //   return (
  //     <PostItem
  //       title={title}
  //       body={body}
  //       publishedDate={publishedDate}
  //       tags={tags}
  //       key={_id}
  //       id={_id}
  //     />
  //   );
  // });
  return (
  <div>
    <ResultBar/>
    {/* <div className={cx('s-result-info-bar-content')}>test</div> */}
    <div className={cx('post-list')}>{postList}</div>
  </div>
  );
};

export default PostList;
