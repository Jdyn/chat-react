import { Reducer } from 'redux';
import { ChatState } from './types';

const initialState: ChatState = {
  rooms: []
};

const reducer: Reducer<ChatState> = (state: ChatState = initialState, action): ChatState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
