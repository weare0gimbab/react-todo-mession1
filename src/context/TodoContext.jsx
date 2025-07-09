import { createContext, useContext, useRef, useState, useEffect } from 'react'
const TodoContext = createContext()
import { getItem, setItem } from '../utils/storage'

export function TodoProvider({ children }) {
    const lastId = useRef(1)

    const [todos, setTodos] = useState(() => getItem('todos', []))

    useEffect(() => {
        setItem('todos', todos)
    }, [todos])

    const addTodo = (text) => {
        const newTodo = {
            id: lastId.current,
            text,
            checked: false,
        }
        setTodos((prevTodos) => [newTodo, ...prevTodos])
    }

    const removeTodo = (selectedId) => {
        const filterTodos = todos.filter((todo) => todo.id != selectedId)
        setTodos(filterTodos)
    }

    const toggleTodo = (selectedId) => {
        const updateTodos = todos.map((todo) => (todo.id == selectedId ? { ...todo, checked: !todo.checked } : todo))
        setTodos(updateTodos)
    }

    const value = {
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
    }

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export function useTodos() {
    const context = useContext(TodoContext)

    return context
}
