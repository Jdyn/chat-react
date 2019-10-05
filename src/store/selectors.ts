import { createSelector } from "reselect";
import { AppState } from ".";
import IChat from "../models/IChat";
import IMessage from "../models/IMessage";

const selectSelectedChat = (state: AppState): IChat["id"] | null =>
  state.selectedChat;
const selectMessages = (state: AppState): IMessage[] => state.messages;

export const selectMessagesForCurrentChat = createSelector(
  [selectSelectedChat, selectMessages],
  (chat, messages) => messages.filter(msg => msg.chat_id === chat)
);
