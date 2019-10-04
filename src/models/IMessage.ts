import IUser from "./IUser"
import IMention from "./IMention"

interface IMessageImage {
  url: string
  height: number
  width: number
}

export default interface IMessage {
  id: number
  message: string
  user: IUser
  edited: boolean
  mentions?: IMention[]
  sent_at: string
  edited_at?: string
  image?: IMessageImage
  reply_to_message?: IMessage
  chat_id: number
}