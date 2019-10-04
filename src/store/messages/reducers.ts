import IChat from "../../models/IChat"
import { Action } from "redux"
import { ADD_MESSAGES } from "./types"
import IMessage from "../../models/IMessage"

interface MessagesAction extends Action {
  messages?: IMessage[]
}

export default (state: IMessage[] = [], action: MessagesAction): IMessage[] => {
  switch(action.type) {
    case ADD_MESSAGES:
      return [
        ...state,
        ...action.messages as IMessage[]
      ]
    default:
      return state
  }
}