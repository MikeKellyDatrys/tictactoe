import {reducer as formReducer} from 'redux-form';
import todosReducer from '../ducks/todos';

export default {
  form:  formReducer,
  todos:  todosReducer
};
