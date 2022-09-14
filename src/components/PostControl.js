import React from 'react';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import PostDetail from './PostDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class PostControl extends React.Component {
  constructor(props){
   super(props);
    this.state = {
      selectedPost: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        selectedPost: null
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }
  

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const action = a.addPost(newPost);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.mainPostList[id];
    this.setState({selectedPost: selectedPost});
  }

  handleDecrementingVotes = () => {
    const votesToDecrement = this.state.selectedPost;
    if (this.state.selectedPost.votes > 0) {
      const quantityToDecrement = {
        votes: (votesToDecrement.votes -= 1)
      };
      this.handleChangingSelectedPost(quantityToDecrement.id);
      this.setState({selectedPost: null});
    } else {
      this.handleChangingSelectedPost(this.state.selectedPost.id);
      this.setState({selectedPost: null});
    }
    
  };

  handleIncrementingVotes = () => {
    const votesToIncrement = this.state.selectedPost;
    if (this.state.selectedPost.votes >= 0) {
      const quantityToIncrement = {
        votes: (votesToIncrement.votes += 1)
      };
      this.handleChangingSelectedPost(quantityToIncrement.id);
      this.setState({selectedPost: null});
    } else {
      this.handleChangingSelectedPost(this.state.selectedPost.id);
      this.setState({selectedPost: null});
    }
   
  };
 
     render() { 
      let currentlyVisibleState = null;
      let buttonText = null;
      if(this.state.selectedPost != null){
        currentlyVisibleState = <PostDetail post={this.state.selectedPost} onClickingDecrement={this.handleDecrementingVotes} onClickingIncrement={this.handleIncrementingVotes} />
        buttonText = "Return to Posts";
      }
      else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />
        buttonText = 'Return to Posts';
      } else {
        currentlyVisibleState = <PostList postList={this.props.mainPostList} onPostSelection={this.handleChangingSelectedPost} />;
        buttonText = "New Post";
      } 
      const postControlStyles = {
        textAlign: 'center',
        width: '100%'
      }
      const postControlContainer = {
        display: 'flex',
        bottom: '100px',
        position: 'relative',
        // overflowY: 'scroll',
      }
      return(
        <React.Fragment>
          <div style={postControlContainer}>
            <div className='postBox' style={postControlStyles}>
              {currentlyVisibleState}
              <button onClick={this.handleClick}>{buttonText}</button>
            </div>
          </div>
        </React.Fragment>
      );
     }
  
  
}

PostControl.propTypes = {
  mainPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mainPostList: state.mainPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;