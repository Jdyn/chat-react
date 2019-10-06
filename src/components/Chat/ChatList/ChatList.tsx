import React from "react";
import IChat from "../../../models/IChat";
import ChatListItem from "./ChatListItem";
import "./ChatList.scss";

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
      {/* {chats.map(chat => (
        <ChatListItem
          key={chat.id}
          chat={chat}
          onSelect={onChatSelected}
          selected={chat.id === selectedChat}
        />
      ))} */}
    </div>
  );
};

export default ChatList;
