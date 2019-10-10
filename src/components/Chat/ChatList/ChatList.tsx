import React from 'react';
import IChat from '../../../models/IChat';
import ChatListItem from './ChatListItem';
import './ChatList.scss';

interface Props {
  chats: IChat[];
}

export const ChatList = (props: Props) => {
  const { chats } = props;

  if (chats.length === 0) {
    // TODO loading
  }

  return (
    <div className="chats-list">
      {[
        {
          id: 1,
          title: 'Hello',
          last_message: {
            sent_at: '2019-10-03T22:44:35.823Z',
            message: 'ok',
            user: { first_name: 'TJ' }
          }
        }
      ].map(chat => (
        <ChatListItem
          key={chat.id}
          chat={chat}
          // onSelect={onChatSelected}
          selected={chat.id === 1}
        />
      ))}
    </div>
  );
};

export default ChatList;
