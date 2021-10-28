import React from 'react'

export default function PrintTodo( {todoItem, toggleTodo}) {
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
