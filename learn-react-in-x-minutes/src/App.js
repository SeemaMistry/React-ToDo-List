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
  const [ todos, setTodos ] = useState(['Todo 1', 'Todo 2'])

  // create some html for the todo list using JSX

  // Return can only return 1 thing, so 2 html elements cannot be returned.
  // Fix: wrap all html-els into one empty element, called a "fragment" 
  // <> [html code] </>
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>0 left todo</div>
    </>
  )
}

export default App;
