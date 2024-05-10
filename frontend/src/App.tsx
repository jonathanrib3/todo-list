import { useState } from 'react'
import './App.css'
import Todo from './components/Todo/Todo'
import { todos } from './assets/todoSeeds'

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([])
  const [todoTitleText, setTodoTitleText] = useState<string>('')
  const [todoDescriptionText, setTodoDescriptionText] = useState<string>('')

  function addTodo({ title, description }: TodoInputData): void {
    if (!title || !description) {
      return
    }

    const latestId = todoList.length === 0 ?  0 : todoList.at(-1).id

    setTodoList([
      ...todoList,
      { id: latestId + 1, title: title, description: description }
    ])
  }

  function deleteTodo(id: number): void {
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  return (
    <main>
      <div className='add-todo-form-container'>
        <div className='add-todo-form'>
          <label>Title</label>
          <br />
          <input className='add-todo-input' value={todoTitleText} onChange={(event) => setTodoTitleText(event.target.value)}></input>
          <br />
          <label>Description</label>
          <br />
          <textarea className='add-todo-input' maxLength={150} value={todoDescriptionText} onChange={(event) => setTodoDescriptionText(event.target.value)}></textarea>
          <br />
          <button className='add-todo-btn' onClick={() => addTodo({ title: todoTitleText, description: todoDescriptionText })}>Add Todo</button>
        </div>
      </div>

      <div className="todo-list-container">
        <ul>
          {
            todoList.map((dataObj: Todo) => (
              <Todo todo={{...dataObj}} deleteTodo={deleteTodo} key={dataObj.id}/>
            ))
          }
        </ul>
      </div>
    </main>
  )
}

export default App
