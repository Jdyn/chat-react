import React, { useMemo } from "react";
import "./ChatListItem.scss";
import IChat from "../../../models/IChat";
import { shortTimestamp } from "../../../lib/ChatHelpers";
import IMessage from "../../../models/IMessage";

interface Props {
  chat: IChat;
  selected: boolean;
  onSelect: (chat: IChat) => void;
}

export const ChatListItem = (props: Props) => {
  const { onSelect, chat, selected } = props;

  const handleClick = () => {
    onSelect(chat);
  };

  const lastMessage = useMemo(() => {
    const last_message = chat.last_message;

    // TBD
    let payload: IMessage | any;

    if (last_message) {
      const message = last_message.message.trim();
      payload = {
        ...last_message,
        message: message === "" ? "🖼Photo" : message
      };
    } else {
      payload = {
        message: "You were added to this chat",
        sent_at: "",
        user: {
          id: null,
          first_name: ""
        }
      };
    }

    return payload;
  }, [chat.last_message]);

  return (
    <div
      className={`chat-list-item ${selected ? "selected" : ""}`}
      onClick={handleClick}
    >
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
            {lastMessage.sent_at ? shortTimestamp(lastMessage.sent_at) : ""}
          </span>
        </div>

        <div className="chat-preview">
          <div>
            {lastMessage.user.first_name && (
              <span className="user-name accent">{`${lastMessage.user.first_name}: `}</span>
            )}
            {`${lastMessage.message}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;
