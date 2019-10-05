import { combineReducers } from 'redux';
import chat from './reducers/chat';
import session from './reducers/session';

const root = combineReducers({
  chat,
  session
});

export type AppState = ReturnType<typeof root>;

export default root;
