import io from "socket.io-client"
import { EventEmitter } from "events"
import Constants from "./Constants"
import IChat from "../models/IChat"
import IMessage from "../models/IMessage"

interface MessagePayload {
  chatId: IChat["id"]
  message: IMessage
}

interface MessagesPayload {
  chatId: IChat["id"]
  messages: IMessage[]
}

export default class ChatSocket extends EventEmitter {
  private socket: SocketIOClient.Socket

  constructor(token: string) {
    super()
    this.socket = io(Constants.ACADEMUS_CHAT_URL)

    this.socket.on("chats", this.onChats.bind(this))
    this.socket.on("messages", this.onMessages.bind(this))
    this.socket.on("message", this.onMessage.bind(this))
  }

  fetchOldMessages(chatId: IChat["id"], before = 9999999999) {
    this.socket.emit("retrieve_messages", { chatId, before })
  }

  private onChats(chats: IChat[]) {
    this.emit("chats", chats)
  }

  private onMessages(payload: MessagesPayload) {
    const messages: IMessage[] = payload.messages.map(message => ({
      ...message,
      chat_id: payload.chatId
    }))

    this.emit("messages", messages)
  }

  private onMessage(payload: MessagePayload) {
    const message = { ...payload.message, chat_id: payload.chatId }
    this.emit("messages", [ message ])
  }
}