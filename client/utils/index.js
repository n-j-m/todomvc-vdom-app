
export function createReducer(initialState, handlers) {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }
    else {
      return state
    }
  }
}

export function merge(dest, source) {
  return Object.assign({}, dest, source)
}