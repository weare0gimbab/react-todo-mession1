import { useState, useEffect } from 'react'
import { getItem, setItem } from '../utils/storage' //local storage

export function useTodos() {
    //getItem으로 가져옴 초기값 삭제
    const [todos, setTodos] = useState(() => getItem('todos', []))

    // local storage에 저장
    useEffect(() => {
        setItem('todos', todos)
    }, [todos])

    const addTodo = (text) => {
        const todo = { id: Date.now(), text, checked: false }
        setTodos([todo, ...todos])
    }

    const removeTodo = (selectedId) => {
        const filterTodos = todos.filter((todo) => todo.id !== selectedId)
        setTodos(filterTodos)
    }

    const toggleTodo = (selectedId) => {
        const updateTodos = todos.map((todo) => (todo.id === selectedId ? { ...todo, checked: !todo.checked } : todo)) // === 사용
        setTodos(updateTodos)
    }

    return { todos, addTodo, removeTodo, toggleTodo }
}
