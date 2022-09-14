import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPostForm(props){
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    let date = new Date();
    props.onNewPostCreation({
      postTitle: event.target.postTitle.value,
      postTime: date.getHours() + ":" + date.getMinutes()  + " " + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear(),
      votes: 0,
      user: event.target.user.value,
      postContent: event.target.postContent.value,
      id: v4(),
    });
    
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewPostFormSubmission}>
        <label htmlFor='postTitle'>Title:</label>
        <input type='text' name='postTitle' placeholder='Post Title'/>
        <label htmlFor='user'>User Name:</label>
        <input type='text' name='user' placeholder='user name'/>
        <label htmlFor='postContent'>Post content:</label>
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