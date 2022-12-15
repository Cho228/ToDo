import { configureStore } from '@reduxjs/toolkit';
import reducer from "./MyTodoSlice";

export default configureStore({
	reducer: { todos: reducer },
})