import { Action } from "redux"
import { ADD_MESSAGES } from "./types"
import IMessage from "../../models/IMessage"

interface MessagesAction extends Action {
  messages?: IMessage[]
}

const sortMessages = (messages: IMessage[]): IMessage[] => (
  messages.sort((a, b): number => (
    a.id - b.id
  ))
)

export default (state: IMessage[] = [], action: MessagesAction): IMessage[] => {
  switch(action.type) {
    case ADD_MESSAGES:
      return sortMessages([
        ...state,
        ...action.messages!!.filter(msg => !state.some(m => m.id === msg.id)) // dedupe
      ])
    default:
      return state
  }
}