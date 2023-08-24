import { configureStore } from '@reduxjs/toolkit'
import {vpetSlice} from './slices/vpetSlice'
import {uiSlice} from './slices/uiSlice'
export const store = configureStore({
  reducer: {
    digimon: vpetSlice.reducer,
    ui: uiSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch