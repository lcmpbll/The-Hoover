import React from 'react';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import PostDetail from './PostDetail';

class PostControl extends React.Component {
  constructor(props){
   super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPostList: [],
      selectedPost: null,
    };
  
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewPostToList = (newPost) => {
    const newMainPostList = this.state.mainPostList.concat(newPost);
    this.setState({mainPostList: newMainPostList, formVisibleOnPage: false});
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.state.mainPostList.filter(post => post.id === id)[0];
    this.setState({selectedPost: selectedPost});
  }

  
 
     render() { 
      let currentlyVisibleState = null;
      let buttonText = null;
      if(this.state.selectedPost != null){
        currentlyVisibleState = <PostDetail post= {this.state.selectedPost} />
        buttonText = "Return to Posts";
      }
      else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />
        buttonText = 'Return to Posts';
      } else {
        currentlyVisibleState = <PostList postList={this.state.mainPostList} onPostSelection={this.handleChangingSelectedPost} />;
        buttonText = "New Post";
      } 
      const postControlStyles = {
        textAlign: 'center',
        width: '100%'
      }
      const postControlContainer = {
        display: 'flex',
        justifyContent: 'center'
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
export default PostControl;