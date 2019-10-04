import React from "react"
import "./ChatBody.scss"
import IChat from "../../models/IChat"
import IMessage from "../../models/IMessage"
import ChatMessage from "./ChatMessage"
import ChatComposer from "./ChatComposer"

interface ChatBodyProps {
  chat: IChat
  messages: IMessage[]
}

export default class ChatBody extends React.PureComponent<ChatBodyProps> {
  render() {
    const title = (
      <div className="chat-title">
        <div className="chat-photo" style={
          {
            backgroundImage: `url("${this.props.chat.image_url}")`
          }
        }/>
        <div className="chat-details">
          <span className="title-text">{this.props.chat.title}</span>
          <span className="members-text">todo</span>
        </div>
      </div>
    )

    const messages = this.props.messages.map(message => (
      <ChatMessage
        key={message.id}
        message={message}
      />
    ))

    const history = (
      <div className="message-history">
        {messages}
      </div>
    )

    return (
      <div className="chat-body">
        <div className="chat-detail">
          {title}
          {history}
          <ChatComposer
            onMessageSend={() => {}}
          />
        </div>
      </div>
    )
  }
}