import React from "react"
import "./ChatComposer.scss"

interface ChatComposerProps {
  onMessageSend: (text: string) => void
}

interface ChatComposerState {
  message: string
}

export default class ChatComposer extends React.PureComponent<ChatComposerProps, ChatComposerState> {
  state = {
    message: ""
  }

  render() {
    return (
      <div className="chat-composer">
        <button className="button-attach"><i className="material-icons">attach_file</i></button>
        <input type="text" placeholder="Type a message..."/>
        <button className="button-send"><i className="material-icons">send</i></button>   
      </div>
    )
  }
}