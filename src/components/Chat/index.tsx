import React, { useState } from 'react';
import IChat from '../../models/IChat';
import IMessage from '../../models/IMessage';
import ChatSidebar from './ChatList/ChatSidebar';
import ChatDisplay from './ChatDisplay/ChatDisplay';

interface Props {
  children?: React.ReactNode;
  chats: IChat[];
  messages: IMessage[];
  updateCurrentChat: () => void;
  currentChat: IChat;
}

const Chat = (props: Props): JSX.Element => {
  const { chats, messages, updateCurrentChat, currentChat } = props;

  return (
    <div>
      <ChatSidebar chats={chats} updateCurrentChat={updateCurrentChat} />
      <ChatDisplay currentChat={currentChat} />
    </div>
  );
};

export default Chat;
