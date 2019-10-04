import IChat from "../../models/IChat"
import { Action } from "redux"
import { SELECT_CHAT, DESELECT_CHAT } from "./types"

interface SelectedChatsAction extends Action {
  selectedChat?: IChat["id"]
}

export default (state: IChat["id"] | null = null, action: SelectedChatsAction): IChat["id"] | null => {
  switch(action.type) {
    case SELECT_CHAT:
      return action.selectedChat as IChat["id"]
    case DESELECT_CHAT:
      return null
    default:
      return state
  }
}