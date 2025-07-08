import { useState, useRef } from 'react'

export function useTodos() {
    const lastId = useRef(4)

    const [todos, setTodos] = useState([
        { id: 4, text: '필수 기능 구현', checkd: false },
        { id: 3, text: 'local storage로 저장', checkd: false },
        { id: 2, text: '커스텀 훅', checkd: false },
        { id: 1, text: 'tailwind 적용', checkd: false },
    ])

    const addTodo = (text) => {
        const todo = { id: lastId.current, text, checked: false }
        setTodos([todo, ...todos])
        lastId.current++
    }

    const removeTodo = (seletedId) => {
        const filterTodos = todos.filter((todo) => todo.id != seletedId)
        setTodos(filterTodos)
    }

    const toggleTodo = (seletedId) => {
        const updateTodos = todos.map((todo) => (todo.id == seletedId ? { ...todo, checked: !todo.checked } : todo))
        setTodos(updateTodos)
    }

    return { todos, addTodo, removeTodo, toggleTodo }
}
