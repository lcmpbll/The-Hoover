import * as c from './../actions/ActionTypes';

const reducer = (state = {}, action) => {
  const { postTitle, postTime, votes, user, postContent, id } = action;
  switch(action.type) {
    case c.ADD_POST:
      return Object.assign({}, state, {
        [id]: {
          postTitle: postTitle,
          postTime: postTime,
          votes: votes,
          user: user,
          postContent: postContent,
          id: id
        }
      });
    default:
      return state;
  }
};

export default reducer;