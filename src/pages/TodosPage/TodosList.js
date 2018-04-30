import Spinner from 'components/Spinner';
import classnames from 'classnames';

import './TodosList.styl';

const TodosList = (props) => {
  return (
    <div className="todos-list-container">
      <Spinner loading={props.todos.loading}>
        <ul className="todos-list">
          {
            props.todos.data.map(todo => {
              const classNames = classnames('todo-item', {'todo-completed': todo.completed});
              return <li key={todo.id} className={classNames} onClick={() => props.handleTodoClick(todo)}>{todo.text}</li>;
            })
          }
        </ul>
      </Spinner>
    </div>
  );
};

TodosList.propTypes = {
  todos: React.PropTypes.object.isRequired,
  handleTodoClick: React.PropTypes.func.isRequired
};

export default TodosList;
