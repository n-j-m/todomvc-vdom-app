import { h, connect } from './app'

import { Header, TodoList, Footer } from './todos'
import { VisibilityFilters } from './todos/actions'
const { ACTIVE, COMPLETED } = VisibilityFilters

function Root(props) {
  const { activeCount, totalCount, visibleTodos, filter, toggleAll } = props
  const ftr = totalCount > 0 ?
    <Footer filter={filter} count={activeCount} /> : ''
  return (
    <div>
      <section className="todoapp">
        <Header />
        <TodoList todos={visibleTodos} toggleAll={toggleAll} />
        {ftr}
      </section>
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
        <p>Created by <a href="http://todomvc.com">you</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </div>
  )
}

function filterTodos(todos, filter) {
  switch(filter) {
    case ACTIVE:
      return todos.filter(t => !t.complete)
    case COMPLETED:
      return todos.filter(t => t.complete)
    default:
      return todos
  }
}

function countActive(todos) {
  return countif(todos, t => !t.complete)
}

function countAll(todos) {
  return countif(todos, t => true)
}

function countif(todos, test) {
  return todos.reduce((sum, t) => {
    if (test(t)) {
      return sum + 1
    }
    return sum
  }, 0)
}

function select(state) {
  console.log('state:', state)
  return {
    activeCount: countActive(state.todos.items),
    totalCount: countAll(state.todos.items),
    toggleAll: state.todos.toggleAll,
    filter: state.visibilityFilter,
    visibleTodos: filterTodos(state.todos.items, state.visibilityFilter)
  }
}

export default connect(Root, select)