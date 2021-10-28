import React from 'react'
import PrintTodo from './Todo'

export default function TodoList({ alltodos }) {
    return (
        alltodos.map (todo => {
            return <PrintTodo todoItem={todo} />
        })
    )
}
