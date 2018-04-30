import {createStore, applyMiddleware, combineReducers} from 'redux';
import rootReducer from '../ducks';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
  predicate: () => true
});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);


export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(combineReducers(rootReducer), initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../ducks/index', () => {
      const nextRootReducer = combineReducers(require('../ducks/index').default);
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
