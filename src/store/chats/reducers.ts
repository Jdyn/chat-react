import IChat from "../../models/IChat"
import { Action } from "redux"
import { CHATS_LOADED } from "./types"
import { lastActive } from "../../lib/ChatHelpers"

interface ChatsAction extends Action {
  chats?: IChat[]
}

const sortChats = (chats: IChat[]): IChat[] => (
  chats.sort((a, b): number => (
    lastActive(b) - lastActive(a)
  ))
)

export default (state: IChat[] = [], action: ChatsAction): IChat[] => {
  switch(action.type) {
    case CHATS_LOADED:
      return sortChats(action.chats as IChat[])
    default:
      return state
  }
}