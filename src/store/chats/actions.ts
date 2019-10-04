import IChat from "../../models/IChat"
import { CHATS_LOADED } from "./types"

export function chatsLoaded(chats: IChat[]) {
  return {
    type: CHATS_LOADED,
    chats
  }
}