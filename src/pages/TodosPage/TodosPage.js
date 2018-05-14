import {Component} from 'react';
import {connect} from 'react-redux';
import {loadTodos, createTodo, updateTodo} from 'ducks/todos';
//import CreateTodoForm from './CreateTodoForm';
//import TodosList from './TodosList';
//import './TodosPage.styl';
import CreateGameForm from './CreateGameForm';

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
        {/* want to comment this out so I can build a tictactoe app using react-redux */}
        {/* <CreateTodoForm onSubmit={this.createTodo.bind(this)} />
        <TodosList todos={this.props.todos} handleTodoClick={this.toggleTodo.bind(this)} /> */}
        <CreateGameForm />
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
