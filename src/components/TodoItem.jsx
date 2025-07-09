import { useTodos } from '../context/TodoContext'

function TodoItem({ todo }) {
    const { removeTodo, toggleTodo } = useTodos()
    return (
        <li key={todo.id}>
            <input
                type="checkbox"
                onChange={() => {
                    toggleTodo(todo.id)
                }}
                checked={todo.checked}
                className="mr-3 w-5 h-5 accent-indigo-500 cursor-pointer" // accent로 색상 지정
            />
            {todo.text || ''}
            <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
    )
}

export default TodoItem
