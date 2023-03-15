import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
  "userName": "Naruto",
  "handle": "@naruto",
  "image": "naruto.jpg",
};

const templateTuit = {
  ...currentUser,
  "topic": "Life",
  "time": "1h",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}


const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: tuits,
  reducers: {
    deleteTuit(state, action) {
      const index = state
      .findIndex(tuit =>
          tuit._id === action.payload);
      state.splice(index, 1);
    },
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },
    likeTuit(state, action) {
      const {tuitId, isLiked} = action.payload;
      const index = state.findIndex(tuit => tuit._id === tuitId);
      if (index !== -1) {
        state[index].liked = isLiked;
        state[index].likes += isLiked ? 1 : -1;
      }
    },
  }
});

export const {createTuit, deleteTuit, likeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;

