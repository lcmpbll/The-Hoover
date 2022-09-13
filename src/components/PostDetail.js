import React from 'react';
import PropTypes from 'prop-types';

function PostDetail(props){
  const { post } = props;
  return (
    <React.Fragment>
      <h1>Post Detail</h1>
      <h4>{post.postTitle}</h4>
      <h4>{post.postTime}</h4>
      <h4>{post.user}</h4>
      <h4>{post.postContent}</h4>
      <h4>{post.votes}</h4>
    </React.Fragment>
  )
}

PostDetail.propTypes = {
  post: PropTypes.object
};

export default PostDetail;