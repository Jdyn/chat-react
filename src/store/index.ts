import { combineReducers } from "redux";
import chats from "./chats/reducers";
import messages from "./messages/reducers";
import selectedChat from "./selectedChat/reducers";
import user from "./user/reducers";

const root = combineReducers({
  chats,
  messages,
  selectedChat,
  user
});

export type AppState = ReturnType<typeof root>;

export default root;
