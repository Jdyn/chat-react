import React, { useMemo } from 'react';
import './ChatListItem.scss';
import IChat from '../../../models/IChat';
import { shortTimestamp } from '../../../lib/ChatHelpers';
import IMessage from '../../../models/IMessage';

interface Props {
  chat: IChat | any;
  selected?: boolean;
  onSelect?: (chat: IChat) => void;
}

export const ChatListItem = (props: Props) => {
  const { onSelect, chat, selected } = props;

  const handleClick = () => {
    onSelect && onSelect(chat);
  };

  const lastMessage = useMemo(() => chat.last_message || ({} as IMessage), [chat.last_message]);

  return (
    <div className={`chat-list-item ${selected ? 'selected' : ''}`} onClick={handleClick}>
      <div
        className="chat-photo"
        style={{
          backgroundImage: `url("${chat.image_url}")`
        }}
      />
      <div className="chat-info">
        <div className="chat-title">
          <div>{chat.title}</div>
          <span className="chat-timestamp">
            {lastMessage.sent_at ? shortTimestamp(lastMessage.sent_at) : ''}
          </span>
        </div>
        <div className="chat-preview">
          <div>
            {lastMessage.user ? (
              <>
                <span className="user-name accent">{`${lastMessage.user.first_name}: `}</span>
                <span>{lastMessage.message}</span>
              </>
            ) : (
              <span>{'You were added to this chat'}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;
