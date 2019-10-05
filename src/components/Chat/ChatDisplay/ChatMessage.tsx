import React from "react"
import IMessage from "../../../models/IMessage"
import "./ChatMessage.scss"
import { fullName, imageConstraints } from "../../../lib/ChatHelpers"

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
          {this.props.message.message}
          {
            !!this.props.message.image &&
            <a className="message-image" href={this.props.message.image.url} target="_blank" rel="noopener noreferrer">
              <img
                className="chat-image"
                src={this.props.message.image.url}
                style={imageConstraints(this.props.message.image)}
                alt={this.props.message.message || `Image uploaded by ${fullName(this.props.message.user)}`}
              />
            </a>
          }
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