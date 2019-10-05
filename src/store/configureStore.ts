import { createStore, applyMiddleware } from 'redux';
import rootReducer, { AppState } from '.';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default function configureStore(initialState: object) {
  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return store;
}
