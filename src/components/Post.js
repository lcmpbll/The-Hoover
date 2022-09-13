import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <React.Fragment>
      <div onClick={() => props.whenPostClicked(props.id)}>
        <h1>{props.postTitle}</h1>
        <p>{props.postTime}</p>
        <p>Votes: {props.votes}  </p>
        <h3>User: {props.user}</h3>
        <p>{props.postContent}</p>
        <p>{props.id}</p>
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  postTitle: PropTypes.string,
  postTime: PropTypes.string,
  votes: PropTypes.number,
  user: PropTypes.string,
  postContent: PropTypes.string,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
}

export default Post;