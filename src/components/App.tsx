import React from "react"
import "./App.scss"
import ChatSocket from "../lib/ChatSocket"
import IChat from "../models/IChat"
import { connect } from "react-redux"
import rootReducer from "../store"
import { chatsLoaded } from "../store/chats/actions"
import ChatSidebar from "./ChatSidebar"
import { selectChat } from "../store/selectedChat/actions"
import IMessage from "../models/IMessage"
import { addMessage, addMessages } from "../store/messages/actions"
import ChatBody from "./ChatBody"

interface AppProps {
  chats: IChat[]
  messages: IMessage[]
  selectedChat: IChat["id"] | null

  chatsLoaded: typeof chatsLoaded
  selectChat: typeof selectChat
  addMessages: typeof addMessages
}

interface AppState {
  socket: ChatSocket
}

class App extends React.PureComponent<AppProps, AppState> {
  componentDidMount() {
    let socket = new ChatSocket("")

    socket.on("chats", (chats: IChat[]) => {
      this.props.chatsLoaded(chats)
    })
    
    socket.on("messages", (messages: IMessage[]) => {
      this.props.addMessages(messages)
    })

    this.setState({ socket })
  }

  onChatSelected(chat: IChat) {
    this.props.selectChat(chat.id)
    
    if(this.messagesForChat(chat.id).length === 0)
      this.state.socket.fetchOldMessages(chat.id)
  }

  messagesForChat(id: IChat["id"]) {
    return this.props.messages.filter(message => (message.chat_id === id))
  }

  render() {
    return (
      <div className="app">
        <ChatSidebar
          chats={this.props.chats}
          selectedChat={this.props.selectedChat}
          onChatSelected={this.onChatSelected.bind(this)}
        />

        {
          !!this.props.selectedChat &&
          <ChatBody
            chat={this.props.chats.filter(chat => (chat.id === this.props.selectedChat))[0]}
            messages={this.messagesForChat(this.props.selectedChat)}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = (state: ReturnType<typeof rootReducer>) => ({
  chats: state.chats,
  messages: state.messages,
  selectedChat: state.selectedChat
})

export default connect(
  mapStateToProps,
  { chatsLoaded, selectChat, addMessages }
)(App)
