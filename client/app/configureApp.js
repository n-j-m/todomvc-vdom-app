import { createApp } from 'vdom-app'
import { createStore, compose } from 'redux'

import todosReducer from '../todos/reducer'

export default function configureApp() {
  const finalCreateStore = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)
  const store = finalCreateStore(todosReducer)
  
  const { h, render, connect } = createApp(
    document.querySelector('#root'),
    store.dispatch
  )

  return { h, render, connect, store }
}