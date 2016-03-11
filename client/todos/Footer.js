import { h, connect } from '../app'

import { clearCompleted, setVisibilityFilter, VisibilityFilters } from './actions'
const { ALL, ACTIVE, COMPLETED } = VisibilityFilters

function createFilterControl(label, filter, selected, setVisibilityFilter) {
  const selectedCls = selected ? 'selected' : ''
  const href = `#${filter.toLowerCase()}`
  return (
    <a className={selectedCls}
      href={href}
      onclick={(ev) => setVisibilityFilter(filter)}>
      {label}
    </a>
  )
}

function Footer(props) {
  const { activeCount, filter, clearCompleted, setVisibilityFilter } = props
  const pluralizedItem = activeCount === 1 ? 'item' : 'items'
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> {pluralizedItem} left
      </span>
      <ul className="filters">
        <li>
          {createFilterControl('All', ALL, filter === ALL, setVisibilityFilter)}
        </li>
        <li>
          {createFilterControl('Active', ACTIVE, filter === ACTIVE, setVisibilityFilter)}
        </li>
        <li>
          {createFilterControl('Completed', COMPLETED, filter === COMPLETED, setVisibilityFilter)}
        </li>
      </ul>
      <button
        className="clear-completed"
        onclick={() => clearCompleted()}>Clear completed</button>
    </footer>
  )
}

export default connect(Footer, null, {
  clearCompleted,
  setVisibilityFilter
})