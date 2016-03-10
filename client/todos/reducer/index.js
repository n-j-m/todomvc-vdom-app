import { combineReducers } from 'redux'

import { createReducer } from '../../utils'
import {
  ADD_TODO,
  TOGGLE_COMPLETED,
  CLEAR_COMPLETED,
  COMPLETE_ALL,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions'

const { ALL } = VisibilityFilters

const visibilityFilter = createReducer(ALL, {
  [SET_VISIBILITY_FILTER]: (state, action) => {
    return action.payload
  }
})

const todo = createReducer(null, {
  [ADD_TODO]: (state, action) => {
    return {
      id: nextId(),
      complete: false,
      text: action.payload
    }
  },
  [TOGGLE_COMPLETED]: (state, action) => {
    return action.id === state.id ? {
      ...state,
      complete: !state.complete
    } : state
  }
})

const todos = createReducer([], {
  [ADD_TODO]: (state, action) => {
    return [ ...state, todo(undefined, action) ]
  },
  [TOGGLE_COMPLETED]: (state, action) => {
    return state.map(t => todo(t, action))
  },
  [CLEAR_COMPLETED]: (state, action) => {
    return state.filter(t => !t.complete)
  },
  [COMPLETE_ALL]: (state, action) => {
    return state.map(t => {
      if (!t.complete) {
        t.complete = true
      }
      return t
    })
  }
})

const todosReducer = combineReducers({
  visibilityFilter,
  todos
})

export default todosReducer