import { Reducer } from 'redux';
import { SessionState } from './types';

const initialState: SessionState = {
  isLoggedIn: false,
  user: null
};

const reducer: Reducer<SessionState> = (
  state: SessionState = initialState,
  action
): SessionState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
