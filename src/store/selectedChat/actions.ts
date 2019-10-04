import IChat from "../../models/IChat"
import { SELECT_CHAT, DESELECT_CHAT } from "./types"

export function selectChat(selectedChat: IChat["id"]) {
  return {
    type: SELECT_CHAT,
    selectedChat
  }
}

export function deselectChat() {
  return {
    type: DESELECT_CHAT
  }
}