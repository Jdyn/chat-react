import React from "react"
import "./ChatListItem.scss"
import IChat from "../models/IChat"

interface ChatListItemProps {
  chat: IChat
  selected: boolean
  onSelect: (chat: IChat) => void
}

export default class ChatListItem extends React.PureComponent<ChatListItemProps> {
  handleClick() {
    this.props.onSelect(this.props.chat)
  }

  render() {
    const photo = (
      <div className="chat-photo" style={
        {
          backgroundImage: `url("${this.props.chat.image_url}")`
        }
      }/>
    )

    const lastMessagePreview: string = (
      this.props.chat.last_message ?
      this.props.chat.last_message.message.trim() === "" ? "🖼Photo" : this.props.chat.last_message.message.trim()
      : ""
    )

    const info = (
      <div className="chat-info">
        <div className="chat-title">
          {this.props.chat.title}
          <span className="chat-timestamp">todo</span>
        </div>
        
        {
          !!this.props.chat.last_message &&
          <div className="chat-preview">
            <span className="user-name accent">{this.props.chat.last_message.user.first_name}</span>: {lastMessagePreview}
          </div>
        }

        {
          !this.props.chat.last_message &&
          <div className="chat-preview">
            You were added to this chat
          </div>
        }
      </div>
    )

    return (
      <div className={`chat-list-item ${this.props.selected && "selected"}`} onClick={this.handleClick.bind(this)}>
        {photo}
        {info}
      </div>
    )
  }
}