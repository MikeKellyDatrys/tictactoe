import {Component} from 'react';
import Router, {Route, Redirect} from 'react-router';
import {Provider} from 'react-redux';
import {createHistory} from 'history';
//import TodosPage from './pages/TodosPage';
import GamesForm from './pages/TodosPage/CreateGameForm';
import configureStore from './store/applicationStore';

import './App.styl';

const store = configureStore();

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.history = createHistory();
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={this.history}>
          {/* <Route path="/" component={TodosPage}/> */}
          <Route path="/" component={GamesForm}/>
          <Redirect from="*" to="/"/>
        </Router>
      </Provider>
    );
  }
}

export default AppContainer;
