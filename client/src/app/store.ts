import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsReducer from '../app/slices/postsSlice';
import modalReducer from '../app/slices/modalSlice';


import createSagaMiddleware from '@redux-saga/core';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware) 
});

sagaMiddleware.run(mySaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
