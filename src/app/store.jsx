import { configureStore } from "@reduxjs/toolkit";

import postsReducer from '../features/posts/postsSlice';
import counterReducer from '../features/counter/counterSlice';
import usersReducer from '../features/users/usersSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer,
        // devTools: false,
    },
});