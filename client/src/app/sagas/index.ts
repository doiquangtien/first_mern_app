import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, call, put } from "redux-saga/effects";
import { postsApi } from "../../api/listApi";
import { createPostFailure, createPostSuccess, deletePostFailure, deletePostSuccess, getPostFailure, getPostSuccess, updatePostFailure, updatePostSuccess } from "../slices/postsSlice";

function* fectchPostSaga(action: PayloadAction<any>) {
  try {
    const { data } = yield call(postsApi.getAllPosts);
    yield put(getPostSuccess(data));
  } catch (err) {
    yield put(getPostFailure());
  }
}

function* fectchCreatePostSaga(action: PayloadAction<any>){
   try {

    const {data} = yield call(postsApi.addPost,action.payload);
    
    yield put(createPostSuccess(data));
  } catch (err) {
    yield put(createPostFailure());
  }
}

function* fectchDeletePostSaga(action: PayloadAction<any>){
   try {
    const {data} = yield call(postsApi.removeList,action.payload);
    yield put(deletePostSuccess(data._id));
  } catch (err) {
    yield put(deletePostFailure());
  }
}

function* fectchUpdatePostSaga(action: PayloadAction<any>){
   try {
    console.log(action.payload);
    
    const {data} = yield call(postsApi.updatePost,action.payload);
    yield put(updatePostSuccess(data));
  } catch (err) {
    yield put(updatePostFailure());
  }
}


function* mySaga() {
  yield takeLatest("posts/getPostRequest", fectchPostSaga);
  yield takeLatest("posts/createPostRequest", fectchCreatePostSaga);
  yield takeLatest("posts/deletePostRequest", fectchDeletePostSaga);
  yield takeLatest("posts/updatePostRequest", fectchUpdatePostSaga);

}

export default mySaga;
