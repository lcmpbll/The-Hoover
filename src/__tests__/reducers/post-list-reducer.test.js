import postListReducer from "../../reducers/post-list-reducer";

describe('postListReducer', () => {
  let action; 
  const postData = {
    postTitle: 'Hoovers',
    postTime: '345',
    votes: 0,
    user: 'Herbert',
    postContent: 'the library',
    id: '3334'
  };
  
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });
  
  test('Should successfully add new post data to mainPostList', () => {
    const { postTitle, postTime, votes, user, postContent, id }= postData;
    action = {
      type: 'ADD_POST',
      postTitle: postTitle,
      postTime: postTime,
      votes: votes,
      user: user,
      postContent: postContent,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
      postTitle: postTitle,
      postTime: postTime,
      votes: votes,
      user: user,
      postContent: postContent,
      id: id,
      }
    });
  });
});