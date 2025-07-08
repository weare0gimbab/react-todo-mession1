function TodoWriteForm({ addTodo }) {
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        addTodo(form.todo.value)
    }
    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="todo" />
                <button type="submit">등록</button>
            </form>
        </>
    )
}

export default TodoWriteForm
