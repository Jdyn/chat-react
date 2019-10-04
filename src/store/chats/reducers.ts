import IChat from "../../models/IChat"
import { Action } from "redux"
import { CHATS_LOADED } from "./types"

interface ChatsAction extends Action {
  chats?: IChat[]
}

export default (state: IChat[] = [], action: ChatsAction): IChat[] => {
  switch(action.type) {
    case CHATS_LOADED:
      return action.chats as IChat[]
    default:
      return state
  }
}