import React from 'react';
import IChat from '../../../models/IChat';
import IMessage from '../../../models/IMessage';
import ChatMessage from './ChatMessage';
import ChatComposer from './ChatComposer';
import './ChatDisplay.scss';

interface Props {
  currentChat: IChat | null;
}

const ChatDisplay = (props: Props) => {
  const { currentChat } = props;

  return (
    <div className="chat-body">
      <div className="chat-detail">
        <div className="chat-display-header">
          {currentChat && (
            <>
              <div
                className="chat-photo"
                style={{
                  backgroundImage: `url("${currentChat.image_url}")`
                }}
              />
              <div className="chat-details">
                <span className="title-text">{currentChat.title}</span>
                <span className="members-text">{currentChat.member_count} students</span>
              </div>
            </>
          )}
        </div>

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
