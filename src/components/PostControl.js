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
    console.log(selectedPost);
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
    console.log(this.state.selectedPost);
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
    console.log(this.state.selectedPost);
  };
 
     render() { 
      let currentlyVisibleState = null;
      let buttonText = null;
      if(this.state.selectedPost != null){
        currentlyVisibleState = <PostDetail post={this.state.selectedPost} onClickingDecrement={this.handleDecrementingVotes} onClickingIncrement={this.handleIncrementingVotes} />
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
export default PostControl;

// Ok, here is the function definition from our PostControl component:

//   handleChangingSelectedPost = id => {
//     const selectedPost = this.props.mainPostList[id];
//     this.setState({ selectedPost: selectedPost });
//   };

//   handleDecrementingVotes = () => {
//     const votesToDecrement = this.state.selectedPost;
//     if (this.state.selectedPost.quantity !== 0) {
//       const quantityToDecrement = {
//         votes: (votesToDecrement.votes -= 1)
//       };
//       this.handleChangingSelectedPost(quantityToDecrement.id);
//     } else {
//       this.handleChangingSelectedPost(this.state.selectedPost.id);
//     }
//   };

//   handleIncrementingVotes = () => {
//     const votesToIncrement = this.state.selectedPost;
//     if (this.state.selectedPost.quantity !== 0) {
//       const quantityToIncrement = {
//         votes: (votesToIncrement.votes += 1)
//       };
//       this.handleChangingSelectedPost(quantityToIncrement.id);
//     } else {
//       this.handleChangingSelectedPost(this.state.selectedPost.id);
//     }
//   };

// Then we pass it in in the PostControl's render() block, for this else-if part:

// } else if (this.state.selectedPost != null) {
//       currentlyVisibleState = (
//         <PostDetail
//           post={this.state.selectedPost}
//           onClickingDelete={this.handleDeletingPost}
//           onClickingEdit={this.handleEditClick}
//           onClickingDecrement={this.handleDecrementingVotes}
//           onClickingIncrement={this.handleIncrementingVotes}
//         />
//       );