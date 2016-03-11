import { h } from '../app'

import { addTodo } from './actions'

function handleKeyPress(ev, dispatch) {
  if ((ev.key && ev.key === 'Enter') || ev.keyCode === 13) {
    ev.preventDefault()
    dispatch(addTodo(ev.target.value))
    ev.target.value = ''
  }
}

export default function Header(props) {
  const { dispatch } = props
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autofocus
        onkeypress={(ev) => handleKeyPress(ev, dispatch)} />
    </header>
  )
}