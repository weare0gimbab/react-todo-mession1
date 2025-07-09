// import { useRef, useState } from 'react'
import TodoWriteForm from './components/TodoWriteForm'
import TodoList from './components/TodoList'
import { TodoProvider } from './context/TodoContext'

function App() {
    return (
        <>
            <TodoProvider>
                <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-8">
                    <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-400">My Todo List</h1>

                        <TodoWriteForm />
                        <TodoList />
                    </div>
                </div>
            </TodoProvider>
        </>
    )
}

export default App
