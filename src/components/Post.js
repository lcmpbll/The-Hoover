import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  const postStyles = {
    border: '2px solid black',
    marginBottom: '10px',
    width: '500px',
  }
  
  const postTitleStyles = {
    background: 'steelBlue',
    height: '100%',
    border: '1px solid steelBlue'
  }

  const singleLine = {
    display: 'flex',
    alignItems: 'center',
   
  }
  
  const container = {
    paddingRight: '25px',
    paddingLeft: '5px'
  }
  return (
    <React.Fragment>
      <div style={postStyles} onClick={() => props.whenPostClicked(props.id)}>
        <div style={postTitleStyles}>
          <h1>{props.postTitle}</h1>
        </div>
        <div style={singleLine}>
          <div style={container}>
            <h3>User: {props.user}</h3>
          </div>
          <div style={container}>
            <p>{props.postTime}</p>
          </div>
          <div style={container}>
            <p>Votes: {props.votes}  </p>
          </div>
        </div>
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