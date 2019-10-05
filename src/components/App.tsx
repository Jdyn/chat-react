import React from 'react';
import './App.scss';
import ChatSocket from '../lib/ChatSocket';
import IChat from '../models/IChat';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { chatsLoaded } from '../store/chats/actions';
import { selectChat } from '../store/selectedChat/actions';
import IMessage from '../models/IMessage';
import { addMessages } from '../store/messages/actions';
import { setCurrentUser } from '../store/user/actions';
import { selectMessagesForCurrentChat } from '../store/selectors';
import IUser from '../models/IUser';
import ChatContainer from '../containers/ChatContainer';

interface AppProps {
  chats: IChat[];
  messages: IMessage[];
  selectedChat: IChat['id'] | null;
  currentChatMessages: IMessage[];

  chatsLoaded: typeof chatsLoaded;
  selectChat: typeof selectChat;
  addMessages: typeof addMessages;
  setCurrentUser: typeof setCurrentUser;
}

interface State {
  socket: ChatSocket;
}

class App extends React.PureComponent<AppProps, State> {
  componentDidMount() {
    let socket = new ChatSocket('');

    socket.on('chats', (chats: IChat[]) => {
      this.props.chatsLoaded(chats);
    });

    socket.on('messages', (messages: IMessage[]) => {
      this.props.addMessages(messages);
    });

    socket.on('authenticated', (user: IUser) => {
      this.props.setCurrentUser(user);
    });

    this.setState({ socket });
  }

  onChatSelected(chat: IChat) {
    this.props.selectChat(chat.id);
    this.state.socket.fetchOldMessages(chat.id);
  }

  render() {
    return (
      <div className="app">
        <ChatContainer />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  chats: state.chats,
  messages: state.messages,
  selectedChat: state.selectedChat,
  currentChatMessages: selectMessagesForCurrentChat(state)
});

export default connect(
  mapStateToProps,
  { chatsLoaded, selectChat, addMessages, setCurrentUser }
)(App);
