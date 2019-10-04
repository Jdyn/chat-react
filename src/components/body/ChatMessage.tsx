import React from "react"
import IMessage from "../../models/IMessage"
import "./ChatMessage.scss"
import { fullName } from "../../lib/ChatHelpers"

interface ChatMessageProps {
  message: IMessage
}

export default class ChatMessage extends React.PureComponent<ChatMessageProps> {
  render() {
    const photo = (
      <div className="user-photo" style={
        {
          backgroundImage: `url("${this.props.message.user.profile_image_url}")`
        }
      }/>
    )

    const content = (
      <div className="message-content">
        <div className="user-name">
          <span>{fullName(this.props.message.user)}</span>
        </div>

        <div className="message-text">
          {
            !!this.props.message.image &&
            <a href={this.props.message.image.url} target="_blank">
              Photo (todo)
            </a>
          }
          {this.props.message.message}
        </div>
      </div>
    )

    return (
      <div className="chat-message">
        {photo}
        {content}
      </div>
    )
  }
}