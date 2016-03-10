import Root from './Root'

import { h, render, store } from './app'

import 'todomvc-common/base.js'
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

/**
 * The main renderer function
 */
store.subscribe(() =>
  render(<Root {...store.getState()} />)
)
render(<Root {...store.getState()} />)
