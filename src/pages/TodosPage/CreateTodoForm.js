import {Component} from 'react';
import {reduxForm} from 'redux-form';

import './CreateTodoForm.styl';

class CreateTodoForm extends Component {
  render() {
    return (
      <form className="create-todo-form" onSubmit={this.props.handleSubmit} autoComplete="off">
        <input type="text" placeholder="Todo text..." {...this.props.fields.text}></input>
        <button type="submit">Create</button>
      </form>
    );
  }
}

CreateTodoForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
};

export default reduxForm({
  form: 'CreateTodoForm',
  fields: ['text']
})(CreateTodoForm);
