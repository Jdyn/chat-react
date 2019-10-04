import React from "react"
import "./App.scss"
import ChatSocket from "../lib/ChatSocket"
import IChat from "../models/IChat"
import { connect } from "react-redux"
import rootReducer from "../store"
import { chatsLoaded } from "../store/chats/actions"
import ChatSidebar from "./sidebar/ChatSidebar"
import { selectChat } from "../store/selectedChat/actions"
import IMessage from "../models/IMessage"
import { addMessages } from "../store/messages/actions"
import { setCurrentUser } from "../store/user/actions"
import { selectMessagesForCurrentChat } from "../store/selectors"
import ChatBody from "./body/ChatBody"
import IUser from "../models/IUser"

interface AppProps {
  chats: IChat[]
  messages: IMessage[]
  selectedChat: IChat["id"] | null
  currentChatMessages: IMessage[]

  chatsLoaded: typeof chatsLoaded
  selectChat: typeof selectChat
  addMessages: typeof addMessages
  setCurrentUser: typeof setCurrentUser
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

    socket.on("authenticated", (user: IUser) => {
      this.props.setCurrentUser(user)
    })

    this.setState({ socket })
  }

  onChatSelected(chat: IChat) {
    this.props.selectChat(chat.id)
    this.state.socket.fetchOldMessages(chat.id)
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
            messages={this.props.currentChatMessages}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = (state: ReturnType<typeof rootReducer>) => ({
  chats: state.chats,
  messages: state.messages,
  selectedChat: state.selectedChat,
  currentChatMessages: selectMessagesForCurrentChat(state)
})

export default connect(
  mapStateToProps,
  { chatsLoaded, selectChat, addMessages, setCurrentUser }
)(App)
