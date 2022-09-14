export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addPost = (post) => {
  const { postTitle, postTime, user, vote, postContent, id } = post;
  return {
    type: 'ADD_POST',
    postTitle: postTitle,
    postTime: postTime,
    user: user,
    vote: vote,
    postContent: postContent,
    id: id
  }
}