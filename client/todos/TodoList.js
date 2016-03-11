import { h, connect } from '../app'

import { toggleAll } from './actions'

import Todo from './Todo'

function TodoList(props) {
  const { todos, toggleAll, dispatchToggleAll } = props
  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        checked={toggleAll}
        onclick={(ev) => dispatchToggleAll(ev.target.checked)} />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map(todo => <Todo {...todo} />)}
      </ul>
    </section>
  )
}

export default connect(TodoList, null, {
  dispatchToggleAll: toggleAll
})