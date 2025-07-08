import { useRef, useState } from 'react'
import TodoWriteForm from './components/TodoWriteForm'

function App() {
    const lastId = useRef(4)
    const [todos, setTodos] = useState([
        { id: 4, text: '필수 기능 구현', checkd: false },
        { id: 3, text: 'local storage로 저장', checkd: false },
        { id: 2, text: '커스텀 훅', checkd: false },
        { id: 1, text: 'tailwind 적용', checkd: false },
    ])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        setTodos([{ id: lastId.current, text: form.todo.value, checked: false }, ...todos])
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

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="todo" />
                <button type="submit">등록</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            onChange={() => {
                                toggleTodo(todo.id)
                            }}
                            checked={todo.checked}
                        />
                        {JSON.stringify(todo.checked)} / {todo.id} / {todo.text}
                        <button onClick={() => removeTodo(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
