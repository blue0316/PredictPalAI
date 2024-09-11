import { configureStore } from '@reduxjs/toolkit';
import TodosReducer from '../features/todos/todosSlice';
import userReducer from '../features/users/userSlice'; 

export default configureStore({
  reducer: {
    todos: TodosReducer,  
    user: userReducer,   
  },
});
