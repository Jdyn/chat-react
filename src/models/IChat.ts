import ICourse from "./ICourse"
import IUser from "./IUser"
import IMessage from "./IMessage"

enum ChatType {
  DIRECT_CHAT = "direct_chat",
  GROUP_CHAT = "group_chat"
}

export default interface IChat {
  readonly id: number
  type: ChatType
  title: string
  about?: string
  image_url?: string
  member_count: number
  associated_course?: ICourse
  owner?: IUser
  last_message?: IMessage
  user?: IUser
  notifications: boolean
  read_up_to_id: number
  unread_messages: number
}