export default function EditTodoModal(): JSX.Element {
  function editTodo({ title, description }: TodoInputData): void {
    if (!title || !description) {
      return
    }

    const latestId = todoList.length === 0 ?  0 : todoList.at(-1).id

    setTodoList([
      ...todoList,
      { id: latestId + 1, title: title, description: description }
    ])
  }


  return (
    <div className="idk">
      <section>
        <label>Title</label>
        <br />
        <input className='add-todo-input' value={todoTitleText} onChange={(event) => setTodoTitleText(event.target.value)}></input>
        <br />
        <label>Description</label>
        <br />
        <textarea className='add-todo-input' maxLength={150} value={todoDescriptionText} onChange={(event) => setTodoDescriptionText(event.target.value)}></textarea>
        <br />
        <button className='add-todo-btn' onClick={() => addTodo({ title: todoTitleText, description: todoDescriptionText })}>Add Todo</button>
        </section>
    </div>
  )
}