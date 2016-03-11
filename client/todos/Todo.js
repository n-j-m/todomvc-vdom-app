import { h, connect } from '../app'
import { editTodo, removeTodo, toggleCompleted } from './actions'

export default function Todo(props) {
  const { id, text, complete, editTodo, removeTodo, toggleCompleted } = props
  const completedCls = complete ? 'complete' : ''
  return (
    <li className={completedCls}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={complete}
          onclick={() => toggleCompleted(id)} />
        <label>{text}</label>
        <button
          className="destory"
          onclick={() => removeTodo(id)}></button>
      </div>
      <input className="edit" value={text} onblur={(ev) => editTodo(id, ev.target.value)} />
    </li>
  )
}

export default connect(Todo, null, {
  editTodo,
  removeTodo,
  toggleCompleted
})