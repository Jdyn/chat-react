import { combineReducers } from "redux";
import chats from "./chats/reducers"
import messages from "./messages/reducers"
import selectedChat from "./selectedChat/reducers"

export default combineReducers({
  chats,
  messages,
  selectedChat
})