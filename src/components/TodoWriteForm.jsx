import { useTodos } from '../context/TodoContext'
import React, { useState } from 'react'

function TodoWriteForm() {
    const { addTodo } = useTodos()
    const [todoText, setTodoText] = useState('')
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        addTodo(form.todo.value)
    }
    return (
        <>
            <form onSubmit={handleOnSubmit} className="flex gap-2 mb-6">
                <input
                    type="text"
                    name="todo"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    placeholder="새로운 할 일 추가..."
                    className="flex-grow p-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400
                                focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md font-semibold
                            hover:bg-indigo-700 transition-colors duration-200"
                >
                    등록
                </button>
            </form>
        </>
    )
}

export default TodoWriteForm
