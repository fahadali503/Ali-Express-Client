import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './slices/userSlice';
import categoriesSlice from './slices/categoriesSlice';
import productSlice from './slices/productSlice';

export const store = configureStore({
    reducer: {
        user: UserSlice,
        categories: categoriesSlice,
        product: productSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch