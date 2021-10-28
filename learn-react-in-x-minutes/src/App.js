import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  // 
  /* create a state using useState hook imported from react 
    - default is an empty array when app loads
    - function returns an array
    - destruct object into todos and setTodos variables
    todos -> every single todos inside out todo-state
    setTodos -> function called to update each of the todos
  */
  const [ todoArray, setTodos ] = useState([{ id: 1, name: 'Todo 1', complete: false}])

  // create some html for the todo list using JSX

  // Return can only return 1 thing, so 2 html elements cannot be returned.
  // Fix: wrap all html-els into one empty element, called a "fragment" 
  // <> [html code] </>
  return (
    <>
      <TodoList alltodos={todoArray} />
      <input type="text" />
      <button>Add Task</button>
      <button>Clear Completed Tasks</button>
      <div>0 tasks left</div>
    </>
  )
}

export default App;
