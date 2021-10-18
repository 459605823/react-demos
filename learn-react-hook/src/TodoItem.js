import React from 'react'

function TodoItem(props) {
    const { todo, handleDelTodo, index } = props
    return (
        <li onClick={() => handleDelTodo(index)}>
            {todo}
        </li>
    )
}

export default TodoItem


