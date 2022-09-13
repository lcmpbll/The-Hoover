import React from 'react';
import PropTypes from 'prop-types';
import { v1 } from 'uuid';

function NewPostForm(props){
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      postTitle: event.target.postTitle.value,
      postTime: v1(),
      votes: 0,
      user: event.target.user.value,
      postContent: event.target.postContent.value,
      id: v1,
    });
    console.log(event.target.title.value);
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewPostFormSubmission}>
        <label htmlfor='postTitle'>Title:</label>
        <input type='text' name='postTitle' placeholder='Post Title'/>
        <label htmlfor='user'>User Name:</label>
        <input type='text' name='user' placeholder='user name'/>
        <label htmlfor='postContent'>Post content:</label>
        <textarea type='text' name='postContent' placeholder='post content'/>
        <button type='submit'>post!</button>
      </form>
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  handleNewPostFormSubmission: PropTypes.func
}

export default NewPostForm;