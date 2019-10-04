import React from "react"
import "./ChatSidebar.scss"
import IChat from "../../models/IChat"
import ChatList from "./ChatList"

interface ChatSidebarProps {
  chats: IChat[]
  selectedChat: IChat["id"] | null
  onChatSelected: (chat: IChat) => void
}

export default class ChatSidebar extends React.PureComponent<ChatSidebarProps> {
  render() {
    return (
      <div className="chat-sidebar">
        <div className="chat-header">
          <div className="logo"></div> Academus Chat
          <a href="/logout" className="logout material-icons" title="Logout">exit_to_app</a>
        </div>

        <ChatList {...this.props} />
      </div>
    )
  }
}