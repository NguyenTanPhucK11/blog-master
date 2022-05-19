import { configureStore } from '@reduxjs/toolkit';
import albumSlice from '../reducers/albumSlice';
import postSlice from '../reducers/postSlice';

export default configureStore({
  reducer: {
    album: albumSlice,
    post: postSlice,
  },
});
