export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const TOGGLE_ALL = 'TOGGLE_ALL'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
export const EDIT_TODO = 'EDIT_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED'
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: filter
  }
}

export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text
  }
}

export function editTodo(id, text) {
  return {
    type: EDIT_TODO,
    payload: { id, text }
  }
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: id
  }
}

export function toggleCompleted(id) {
  return {
    type: TOGGLE_COMPLETED,
    payload: id
  }
}

export function toggleAll(toggleState) {
  return {
    type: TOGGLE_ALL,
    payload: toggleState
  }
}

export function clearCompleted() {
  return {
    type: CLEAR_COMPLETED
  }
}