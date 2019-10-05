import React from 'react';
import IChat from '../../../models/IChat';
import IMessage from '../../../models/IMessage';
import ChatMessage from './ChatMessage';
import ChatComposer from './ChatComposer';
import './ChatDisplay.scss';

interface Props {
  chat: IChat | null;
  messages: [];
}

const ChatDisplay = (props: Props) => {
  const { chat, messages } = props;

  return (
    <div className="chat-body">
      <div className="chat-detail">
        {chat && (
          <div className="chat-title">
            <div
              className="chat-photo"
              style={{
                backgroundImage: `url("${chat.image_url}")`
              }}
            />
            <div className="chat-details">
              <span className="title-text">{chat.title}</span>
              <span className="members-text">{chat.member_count} students</span>
            </div>
          </div>
        )}
        <div className="message-history">
          {/* {messages.map(message => (
            <ChatMessage key={message.id} message={message} />
          ))} */}
        </div>
        <ChatComposer onMessageSend={() => {}} />
      </div>
    </div>
  );
};

export default ChatDisplay;
