import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

//reducer = state, action
// state is an array of posts & we are in the posts in reducers
//exporting to use in reducers/index.js
export default (posts = [], action) => {
  switch (action.type) {
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case UPDATE:
      //output of a map is an array
      //will change something in the array & return the updated array
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      //spread all the posts, add a new post - stored in the action.paylod
      return [...posts, action.payload];
    default:
      return posts;
  }
};
