import ChevronDownIcon from "../../icons/ChevronDownIcon"
import PencilIcon from "../../icons/PencilIcon"
import TrashIcon from "../../icons/TrashIcon"

export default function Todo({ todo, deleteTodo }: { todo: Todo, deleteTodo: (id: number) => void }) {
  return (
    <li className="todo">
      <div className="action-btns">
        <button id="delete-btn" className="todo-action-btn" onClick={() => deleteTodo(todo.id)}>
          <TrashIcon />
        </button>

        <button id="edit-btn" className="todo-action-btn" >
          <PencilIcon />
        </button>
      </div>

      <h2>
        {todo.title}
      </h2>

      <p>
        {todo.description}
      </p>

      <div className="expand-description-container">
        <div className="expand-description-logo">
          <ChevronDownIcon strokeWidth={3}/>
        </div>
      </div>
    </li>
  )
}