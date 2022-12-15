import React from "react";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../store/MyTodoSlice";


const MyToDo = ({ todos }) => {
	const dispatch = useDispatch();

	return (
		<div>
		  {todos.map(todo =>
				<div className="todo" key={todo.id}>
					<label>
						<input type="checkbox" 
							onChange={() => dispatch(completeTodo({ todo }))}></input>
						<span></span>
					</label>
					<p className={todo.done ? "completedTodo" : "notCompletedTodo"}>{todo.todo}</p>
					<button className="delete"
						onClick={() => dispatch(deleteTodo({ todo }))}
					>
						&#10007;
					</button>
				</div>
		  )}
		</div>
	 )
}

export default MyToDo;