import React from 'react';
import './ChatSidebar.scss';
import IChat from '../../../models/IChat';
import ChatList from './ChatList';

interface Props {
  chats: IChat[];
}

const ChatSidebar = (props: Props) => {
  const { chats } = props;
  return (
    <div className="chat-sidebar">
      <div className="chat-header">
        <div className="logo" />
        <span>Academus Chat</span>
        <a href="/logout" className="logout material-icons" title="Logout">
          exit_to_app
        </a>
      </div>

      <ChatList chats={chats} />
    </div>
  );
};

export default ChatSidebar;
