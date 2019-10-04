import IMessage from "../../models/IMessage"
import { ADD_MESSAGES } from "./types"

export function addMessage(message: IMessage) {
  return {
    type: ADD_MESSAGES,
    messages: [ message ]
  }
}

export function addMessages(messages: IMessage[]) {
  return {
    type: ADD_MESSAGES,
    messages
  }
}