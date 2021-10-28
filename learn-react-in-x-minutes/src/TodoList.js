import React from 'react'
import PrintTodo from './Todo'

export default function TodoList({ alltodos, toggleTodo }) {
    return (
        alltodos.map (todo => {
            // need a unique key associated with each todoItem
            // key is for efficency purpose 
            return <PrintTodo key={todo.id} todoItem={todo} toggleTodo={toggleTodo} />
        })
    )
}
