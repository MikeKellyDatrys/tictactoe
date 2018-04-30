import mocks from '../mocks';

const LOAD          = 'tictactoe/todos/LOAD';
const LOAD_COMPLETE = 'tictactoe/todos/LOAD_COMPLETE';
const LOAD_ERROR    = 'tictactoe/todos/LOAD_ERROR';

const CREATE    = 'tictactoe/todos/CREATE';
const UPDATE    = 'tictactoe/todos/UPDATE';

export default function reducer(state = {loading: true, data: []}, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        loading: true,
        data:    []
      };

    case LOAD_COMPLETE:
      return {
        loading: false,
        data: action.payload
      };

    case LOAD_ERROR:
      return {
        loading: false,
        data: []
      };

    case CREATE:
      const newTodo = {id: state.data.length + 1, text: action.payload.text, completed: false};
      return {
        ...state,
        data: [
          ...state.data,
          newTodo
        ]
      };

    case UPDATE:
      return {
        ...state,
        data: state.data.map(todo => itemReducer(todo, action))
      };

    default: return state;
  }
}

function itemReducer(state = {}, action = {}) {
  switch (action.type) {
    case UPDATE:
      if (state.id === action.id) {
        return Object.assign({}, state, action.payload);
      }
      return state;

    default: return state;
  }
}

export function loadTodos() {
  return dispatch => {
    dispatch({type: LOAD});
    setTimeout(() => dispatch({type: LOAD_COMPLETE, payload: mocks.todos}), 1000);
  };
}

export function createTodo(data) {
  return {type: CREATE, payload: data};
}

export function updateTodo(id, data) {
  return {type: UPDATE, id, payload: data};
}
