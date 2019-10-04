import { combineReducers } from "redux";
import chats from "./chats/reducers"
import messages from "./messages/reducers"
import selectedChat from "./selectedChat/reducers"
import user from "./user/reducers"

export default combineReducers({
  chats,
  messages,
  selectedChat,
  user
})