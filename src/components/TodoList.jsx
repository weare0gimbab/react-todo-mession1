import TodoItem from './TodoItem'
import { useTodos } from '../context/TodoContext'

function TodoList() {
    const { todos } = useTodos()
    return (
        <ul className="mt-4 border-t border-gray-700 pt-4 space-y-3">
            {todos.length === 0 ? (
                <p className="text-center text-gray-400 italic">할 일이 없습니다!</p>
            ) : (
                todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
        </ul>
    )
}

export default TodoList
