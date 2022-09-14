import React from 'react';
import PropTypes from 'prop-types';

function PostDetail(props){
  const { post, onClickingDecrement, onClickingIncrement } = props;
  return (
    <React.Fragment>
      <h1>Post Detail</h1>
      <h4>{post.postTitle}</h4>
      <h4>{post.postTime}</h4>
      <h4>{post.user}</h4>
      <h4>{post.postContent}</h4>
      <h4>Votes: {post.votes}</h4>
      <button onClick={()=> onClickingDecrement(post.id)}>Blows -</button>
      <button onClick={()=> onClickingIncrement(post.id)}>Sucks +</button>
    </React.Fragment>
  )
}

PostDetail.propTypes = {
  post: PropTypes.object,
  
};

export default PostDetail;