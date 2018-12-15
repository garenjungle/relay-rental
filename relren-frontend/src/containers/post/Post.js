import React, { Component } from 'react';
import PostInfo from 'components/post/PostInfo';
import PostBody from 'components/post/PostBody';
import PostComment from 'components/post/PostComment';
import * as postActions from 'store/modules/post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

class Post extends Component {
  initialize = async () => {
    const { PostActions, id } = this.props;
    try {
      await PostActions.getPost(id);
    } catch (e) {
      console.log(e);
    }
  };

  handleReservationClick = async () => {
    const { BaseActions, logged, userId } = this.props;
    if (!logged) {
      BaseActions.showModal('reservation');
      BaseActions.initializeUserModal();
      // try {
      //   await BaseActions.logout(userId);
      //   window.location.reload(); // 페이지 새로고침
      // } catch (e) {
      //   console.log(e);
      // }
      // return;
    }
  };

  componentDidMount() {
    this.initialize();
  }

  render() {
    const { loading, post } = this.props;
    const { handleReservationClick } = this;

    if (loading) return null; // 로딩 중일 때는 아무것도 보여 주지 않음
    const { title, body, publishedDate, tags } = post.toJS();
    return (
      <div>
        <PostInfo title={title} publishedDate={publishedDate} tags={tags} />
        <PostBody body={body} handleReservationClick={handleReservationClick} />
        <PostComment />
      </div>
    );
  }
}

export default connect(
  state => ({
    post: state.post.get('post'),
    loading: state.pender.pending['post/GET_POST'], // 로딩 상태
    logged: state.base.get('logged'),
    userId: state.base.getIn(['userModal', 'userId']),
  }),
  dispatch => ({
    PostActions: bindActionCreators(postActions, dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch),
  }),
)(Post);