import React from "react"
import "./ChatList.scss"
import IChat from "../models/IChat"
import ChatListItem from "./ChatListItem"

interface ChatListProps {
  chats: IChat[]
  selectedChat: IChat["id"] | null
  onChatSelected: (chat: IChat) => void
}

export default class ChatList extends React.PureComponent<ChatListProps> {
  render() {
    if(this.props.chats.length === 0) {
      // TODO loading
    }

    const items = this.props.chats.map(chat => (
      <ChatListItem
        key={chat.id}
        chat={chat}
        onSelect={this.props.onChatSelected}
        selected={chat.id === this.props.selectedChat}
      />
    ))

    return (
      <div className="chat-list">
        {items}
      </div>
    )
  }
}