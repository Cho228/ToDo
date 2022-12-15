import './App.css';
import MyToDo from './components/MyToDo';
import MyModal from './components/MyModal';
import React, { useState, useEffect } from "react";

import { useSelector, useDispatch} from 'react-redux';
import { addTodo, addTodoFirestore } from './store/MyTodoSlice';

import { todoList } from "./firebase";



function App() {

  const todos = useSelector(state => state.todos.todos);

  const [isModal, setModal] = useState(false);
  const [todo, setTodo] = useState()
  

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({todo}))
    setTodo('');
  }

  const changeTodo = (text) => {
    setTodo(text)
  }
  
  useEffect(() => {
    todoList
    .then(result => result.map(item => dispatch(addTodoFirestore({item}))
    )) 
  }, [])


  return (
    <div className="App">
      <div>
        <h1>Todo List</h1>
        <MyToDo todos={todos}/>
      </div>

      <button
        className="button"
        onClick={() => setModal(true)}
      >
        Create New Todo
      </button>

      <MyModal
        isVisible={isModal}
        onClose={() => setModal(false)}
        todoCreate={addTask}
        handleChange={changeTodo}
      />
    </div>
  );
}

export default App;