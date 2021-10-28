import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import {v4 as uuidv4} from 'uuid';

function App() {
  // 
  /* create a state using useState hook imported from react 
    - default is an empty array when app loads
    - function returns an array
    - destruct object into todos and setTodos variables
    todos -> every single todos inside out todo-state
    setTodos -> function called to update each of the todos
  */
  const [ todoArray, setTodos ] = useState([])
  const todoNameRef = useRef() // Lets you reference value of input

  // handle onClick event of input
  function handleAddTodo(e) {
    const name = todoNameRef.current.value // using useRef to get input value
    if (name === '') return
    setTodos(prevTodos => {
      // create new task object, by adding it to previousTodo list
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}] 
    })
    todoNameRef.current.value = null // clear input onclick
  }

  // create some html for the todo list using JSX

  // Return can only return 1 thing, so 2 html elements cannot be returned.
  // Fix: wrap all html-els into one empty element, called a "fragment" 
  // <> [html code] </>
  return (
    <>
      <TodoList alltodos={todoArray} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Task</button>
      <button>Clear Completed Tasks</button>
      <div>0 tasks left</div>
    </>
  )
}

export default App;
