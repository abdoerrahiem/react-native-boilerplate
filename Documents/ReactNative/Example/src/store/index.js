import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'

const store = configureStore({
  reducer: {
    userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
