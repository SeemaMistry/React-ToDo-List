import React from 'react'

export default function PrintTodo( {todoItem} ) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={todoItem.complete} />
                {todoItem.name}
            </label>
            
        </div>
    )
}
