import {Component} from 'react';
import {connect} from 'react-redux';
import {loadTodos, createTodo, updateTodo} from 'ducks/todos';
import CreateTodoForm from './CreateTodoForm';
import TodosList from './TodosList';

import './TodosPage.styl';

class TodosPage extends Component {
  componentDidMount() {
    this.props.dispatch(loadTodos());
  }

  createTodo(data) {
    this.props.dispatch(createTodo(data));
  }

  toggleTodo(data) {
    this.props.dispatch(updateTodo(data.id, {completed: !data.completed}));
  }

  render() {
    return (
      <div className="container">
        <CreateTodoForm onSubmit={this.createTodo.bind(this)} />
        <TodosList todos={this.props.todos} handleTodoClick={this.toggleTodo.bind(this)} />
      </div>
    );
  }
}

TodosPage.propTypes = {
  todos: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {todos: state.todos};
}

export default connect(mapStateToProps)(TodosPage);
