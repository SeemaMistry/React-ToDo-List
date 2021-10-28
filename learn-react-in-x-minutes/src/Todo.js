import React from 'react'

export default function PrintTodo( {todoItem, toggleTodo}) {
    // onChange attribute calls toggleTodo on the task-id were inside of -> Goes to TodoList.js
    function handleTodoClick() {
        toggleTodo(todoItem.id)
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={todoItem.complete} onChange={handleTodoClick}/>
                {todoItem.name}
            </label>
            
        </div>
    )
}
