import React from 'react';
import styles from './PostComment.module.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import CommentItem from 'components/post/CommentItem';


const cx = classNames.bind(styles);

const CommentList = ({ comments }) => {
  const commentList = comments.map(comment => {
    const { _id, title, body, publishedDate, tags } = comment;
    return (
      // <div><h3>{_id}</h3>{body}</div>
      <div>
        <CommentItem
          title={title}
          body={body}
          publishedDate={publishedDate}
          tags={tags}
          _id={_id}
        />
      </div>
    );
  });
  return <div className={cx('comment-list')}>{commentList}</div>;
};

var comments = [
  {_id:'youngin1.lee@samsung.com', title:'', 
  body:"These light bulbs are life-changing. I was having a hard time waking up in the morning and my boyfriend introduced me to these bulbs and the sunrise feature. I loved them, but since they were pricey, I went for a cheaper version (Flux bulbs). Don't make that mistake! The Flux app has similar features but is clunky and not intuitive, the bulbs have connectivity issues and sometimes didn't work, and the bulbs weren't very 'smart' - if I turned them off/on outside of their programmed times to turn off/on, they would do weird things and not work properly.", 
  publishedDate:'2018-09-12', tags:'' },
  {_id:'youngkyu@samsung.com', title:'', 
  body:"I. Am. So. In. Love. We paired these up with our Alexa and alternate between utilizing it through voice commands and the Philips Hue app. The color ambiance lights are MUCH more useful than the white ones. We like to adjust the lighting in the room to red if we're working on things at night, but I've found it works best on 10% brightness when we're watching a horror film so we can see, without damaging out night vision, around the room if we have to grab a drink or something. Typically we would put the white filter on at 3%. That's the joy of these lights, you can pick whatever color and intensity in addition to setting up routines. I wake up easily to lights, so the bedroom lamp is set to gradually illuminate until it reaches full intensity by 8 am to help me wake up without an alarm. They also can be set to routines while you're on travel or remotely activated through either the Alexa app or the Hue app to maintain the illusion of someone being home. These are much better than the wall plugin timers that activate your lamps or tv while you're gone.",
  publishedDate:'2018-09-12', tags:'' }
];
const PostComment = () => (
  <div className={cx('post-comment')}>
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
    <CommentList comments={comments} />
  </div>
);

export default PostComment;
