import { configureStore } from '@reduxjs/toolkit';
import TodosReducer from '../features/todos/todosSlice';
import userReducer from '../features/users/userSlice'; 
import { userProfileApi } from 'api/UserProfle/userProfileApi';
import { setupListeners } from '@reduxjs/toolkit/query';
export default configureStore({
  reducer: {
    todos: TodosReducer,  
    user: userReducer,   
    [userProfileApi.reducerPath]: userProfileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userProfileApi.middleware),
});
