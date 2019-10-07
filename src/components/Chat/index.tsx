import React from 'react';
import IChat from '../../models/IChat';
import ChatSidebar from './ChatList/ChatSidebar';
import ChatDisplay from './ChatDisplay/ChatDisplay';
import './Chat.scss';

interface Props {
  children?: React.ReactNode;
  chats: IChat[];
}

const Chat = (props: Props): JSX.Element => {
  const { chats } = props;

  return (
    <div className="chat-root">
      <ChatSidebar chats={chats} />
      <ChatDisplay currentChat={null} />
    </div>
  );
};

export default Chat;
