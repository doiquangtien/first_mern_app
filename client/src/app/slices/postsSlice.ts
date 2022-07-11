import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CounterState {
  posts: any;
  status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  posts: [],
  status: "idle",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostRequest: (state) => {
      state.status = "loading";
    },
    getPostSuccess: (state, action) => {
      state.status = "idle";
      state.posts = action.payload;
    },
    getPostFailure: (state) => {
      state.status = "failed";
    },

    createPostRequest: (state, action) => {
      state.status = "loading";
    },
    createPostSuccess: (state, action) => {
      state.posts = [...state.posts, action.payload];
      state.status = "idle";
    },
    createPostFailure: (state) => {
      state.status = "failed";
    },

    deletePostRequest: (state, action) => {
      state.status = "loading";
    },
    deletePostSuccess: (state, action) => {
      const newPost = [...state.posts].filter(
        (item) => item._id !== action.payload
      );
      state.posts = newPost;
      state.status = "idle";
    },
    deletePostFailure: (state) => {
      state.status = "failed";
    },

    updatePostRequest: (state, action) => {
      return state;
    },
    updatePostSuccess: (state, action) => {
      state.posts = [...state.posts].map((item) => item._id === action.payload._id ? action.payload : item )
      state.status = "idle";
    },
    updatePostFailure: (state) => {
      state.status = "failed";
    },
  },
});

export const {
  getPostRequest,
  getPostSuccess,
  getPostFailure,
  createPostRequest,
  createPostSuccess,
  createPostFailure,
  deletePostRequest,
  deletePostSuccess,
  deletePostFailure,
  updatePostRequest,
  updatePostSuccess,
  updatePostFailure,
} = postsSlice.actions;

export const selectStatus = (state: RootState) => state.posts.status;
export const selectPosts = (state: RootState) => state.posts.posts;

export default postsSlice.reducer;
