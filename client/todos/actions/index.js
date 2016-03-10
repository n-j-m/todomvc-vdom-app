export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const COMPLETE_ALL = 'TOGGLE_ALL'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED'
}

export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text
  }
}

export function toggleCompleted(id) {
  return {
    type: TOGGLE_COMPLETED,
    payload: id
  }
}

export function toggleAll() {
  return {
    type: TOGGLE_ALL
  }
}

export function clearCompleted() {
  return {
    type: CLEAR_COMPLETED
  }
}