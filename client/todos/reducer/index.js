import { combineReducers } from 'redux'

import { createReducer, merge } from '../../utils'

import {
  ADD_TODO,
  TOGGLE_COMPLETED,
  CLEAR_COMPLETED,
  TOGGLE_ALL,
  EDIT_TODO,
  REMOVE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions'

function nextId() {
  return Date.now()
}

const { ALL } = VisibilityFilters

function visibilityFilter(state = ALL, action) {
  if (action.type === SET_VISIBILITY_FILTER) {
    return action.payload
  }
  return state
}

function todo(state, action) {
  switch(action.type) {
    case ADD_TODO:
      return {
        id: nextId(),
        complete: false,
        text: action.payload
      }
    case TOGGLE_COMPLETED:
      if (action.payload === state.id) {
        console.log('toggle:', state)
        console.log('merge:', merge(state, {complete: !state.complete}))
      }
      return action.payload === state.id ?
        merge(state, {complete: !state.complete}) : state
    case EDIT_TODO:
      return action.payload.id === state.id ?
        merge(state, action.payload) : state
    default:
      return state
  }
}

const initialTodos = {
  toggleAll: false,
  items: []
}

function todos(state = initialTodos, action) {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, todo(undefined, action)]
      }
    case TOGGLE_COMPLETED:
      return {
        ...state,
        items: state.items.map(t => todo(t, action))
      }
    case EDIT_TODO:
      return {
        ...state,
        items: state.items.map(t => todo(t, action))
      }
    case REMOVE_TODO: {
      const nextItems = state.items.filter(t => t.id !== action.payload)
      return {
        toggleAll: state.toggleAll && nextItems.length,
        items: nextItems
      }
    }
    case CLEAR_COMPLETED:
      const nextItems = state.items.filter(t => !t.complete)
      return {
        toggleAll: !!(state.toggleAll && nextItems.length),
        items: nextItems
      }
    case TOGGLE_ALL:
      if (!state.items.length) {
        return state
      }
      return {
        toggleAll: action.payload,
        items: state.items.map(t => ({...t, complete: action.payload}))
      }
    default:
      return state
  }
}

const todosReducer = combineReducers({
  visibilityFilter,
  todos
})

export default todosReducer