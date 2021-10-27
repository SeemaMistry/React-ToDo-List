import TodoList from "./TodoList";

function App() {
  // create some html for the todo list using JSX

  // Return can only return 1 thing, so 2 html elements cannot be returned.
  // Fix: wrap all html-els into one empty element, called a "fragment" 
  // <> [html code] </>
  return (
    <>
      <TodoList />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>0 left todo</div>
    </>
  )
}

export default App;
