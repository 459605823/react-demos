import { useState, useEffect } from 'react'

// 自定义hook 必须以use开头
export const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    function handleMove(e) {
        setPosition({ x: e.clientX, y: e.clientY })
    }
    useEffect(() => {
        // componentDidMount、componentDidUpdate
        window.addEventListener('mousemove', handleMove)
        document.title = `(${position.x}, ${position.y})`
        return () => { // componentWillUnmount
            window.removeEventListener('mousemove', handleMove)
        }
    }, [position])
    return position
}

export const useTodo = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState(['learn react hook'])
    const handleDelTodo = (index) => {
        const arr = todos.slice()
        arr.splice(index, 1)
        setTodos(arr)
    }
    const handleAddTodo = () => {
        if (todo.trim()) {
            const arr = todos.slice()
            arr.push(todo)
            setTodos(arr)
            setTodo('')
        }
    }
    return [todo, setTodo, todos, handleAddTodo, handleDelTodo]
}