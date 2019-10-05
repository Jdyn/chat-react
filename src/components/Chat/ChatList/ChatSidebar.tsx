import React from 'react';
import './ChatSidebar.scss';
import IChat from '../../../models/IChat';
import ChatList from './ChatList';

interface ChatSidebarProps {
  chat: IChat[];
  setChat: (chat: IChat) => void;
}

export default class ChatSidebar extends React.PureComponent<ChatSidebarProps> {
  render() {
    return (
      <div className="chat-sidebar">
        <div className="chat-header">
          <div className="logo" />
          <span>Academus Chat</span>
          <a href="/logout" className="logout material-icons" title="Logout">
            exit_to_app
          </a>
        </div>

        <ChatList {...this.props} />
      </div>
    );
  }
}
