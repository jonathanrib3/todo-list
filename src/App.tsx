import './App.css'
import Todo from './components/Todo/Todo'

function App() {
  const data = [
    {
      description: 'Lorem Ipsum',
      title: 'Sample text'
    },
    {
      description: 'Lorem Ipsum',
      title: 'Sample text'
    },
    {
      description: 'Lorem Ipsum',
      title: 'Sample text'
    },
    {
      description: 'Lorem Ipsum',
      title: 'Sample text'
    }
  ]

  return (
    <main>
      <div className='add-todo-form-container'>
        <form className="add-todo-form">
          <label>Title</label>
          <br />
          <input className='add-todo-input'></input>
          <br />
          <label>Description</label>
          <br />
          <textarea className='add-todo-input'></textarea>
          <br />
          <button >Add Todo</button>
        </form>
      </div>

      <div className="todo-list-container">
        <ul>
          {
            data.map((dataObj) => (
              <Todo {...dataObj} />
            ))
          }
        </ul>
      </div>
    </main>
  )
}

export default App
