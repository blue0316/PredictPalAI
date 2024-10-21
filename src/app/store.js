import { configureStore } from "@reduxjs/toolkit";
import TodosReducer from "../features/todos/todosSlice";
import userReducer from "../features/users/userSlice";
import { userProfileApi } from "api/UserProfle/userProfileApi";
import { broadAgeSoccerApi } from "@api/BroadAgeSoccer/broadAgeSoccerApi";
import { videoApi } from "@api/Video/videoApi";
export default configureStore({
  reducer: {
    todos: TodosReducer,
    user: userReducer,
    [userProfileApi.reducerPath]: userProfileApi.reducer,
    [videoApi.reducerPath]: videoApi.reducer,
    [broadAgeSoccerApi.reducerPath]: broadAgeSoccerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userProfileApi.middleware)
      .concat(videoApi.middleware)
      .concat(broadAgeSoccerApi.middleware),
});
