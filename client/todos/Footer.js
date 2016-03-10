import { h } from '../app'

export default function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count"><strong>0</strong> items left</span>
      <ul className="filters">
        <li>
          <a className="selected" href="#/">All</a>
        </li>
        <li>
          <a className="selected" href="#/active">Active</a>
        </li>
        <li>
          <a className="selected" href="#/completed">Completed</a>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}