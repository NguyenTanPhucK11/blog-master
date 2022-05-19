import { configureStore } from '@reduxjs/toolkit';
import albumSlice from '../reducers/albumSlice';
import commentSlice from '../reducers/commentSlice';
import postSlice from '../reducers/postSlice';
import photoSlice from '../reducers/photoSlice';


export default configureStore({
  reducer: {
    album: albumSlice,
    post: postSlice,
    comment: commentSlice,
    photo: photoSlice,
  },
});
