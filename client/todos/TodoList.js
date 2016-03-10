import { h } from '../app'

export default function TodoList() {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </section>
  )
}