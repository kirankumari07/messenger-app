import MessageInput from "./MessageInput";
import {Friend, Message} from "../App";

type ChatProps = {
  friend: Friend;
  messages: Message[];
  onSend: (msg: string) => void;
};

const ChatWindow = (props: ChatProps) => {
  const { friend, messages, onSend } = props;
  return (
    <div className="chat-window">
      <h2>Chat with {friend.name}</h2>
      <div className="chat-messages">
        {messages.length === 0 && (
          <div className="no-messages">No messages yet.</div>
        )}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message-row${msg.sender === "me" ? " me" : ""}`}
          >
            <span className="message-bubble">{msg.content}</span>
            <span className="message-time">
              {msg.timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        ))}
      </div>
      <MessageInput onSend={onSend} />
    </div>
  );
};

export default ChatWindow;
