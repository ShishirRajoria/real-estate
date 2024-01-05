import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'

export const store = configureStore({
  reducer: {
   user:userReducer
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false,
  }),

})



// This creates a Redux store, and also automatically 
// configure the Redux DevTools extension so that you can inspect the store while developing.

/*  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
  serializableCheck:false,//what this do is protect us from giving error for not serializing the variables
     or reducers function in future
}),*/