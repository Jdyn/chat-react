import { createSelector } from "reselect"
import rootReducer from "."
import IChat from "../models/IChat"
import IMessage from "../models/IMessage"

const selectSelectedChat = (state: ReturnType<typeof rootReducer>): IChat["id"] | null => state.selectedChat
const selectMessages = (state: ReturnType<typeof rootReducer>): IMessage[] => state.messages

export const selectMessagesForCurrentChat = createSelector(
  [ selectSelectedChat, selectMessages ],
  (chat, messages) => messages.filter(msg => msg.chat_id === chat)
)