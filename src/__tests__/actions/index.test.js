
import * as actions from './../../actions';

describe('Forum actions', () => {
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addPost should create ADD_POST action', () => {
    expect(actions.addPost({
      postTitle: 'whatever',
      postTime: '1608',
      user: 'noone',
      vote: 1,
      postContent: 'qwerty',
      id: '1'
    })).toEqual({
      type: 'ADD_POST',
      postTitle: 'whatever',
      postTime: '1608',
      user: 'noone',
      vote: 1,
      postContent: 'qwerty',
      id: '1'
    })
  })
});