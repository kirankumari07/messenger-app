import { useState } from "react";

type MessageProps = {
  onSend: (msg: string) => void;
};

function MessageInput({ onSend }: MessageProps) {
  const [val, setVal] = useState("");

  function submit() {
    if (!val.trim()) return;
    onSend(val.trim());
    setVal("");
  }

  return (
    <div className="message-input-container">
      <input
        className="message-input"
        value={val}
        onChange={e => setVal(e.target.value)}
        onKeyDown={e => e.key === "Enter" && submit()}
        placeholder="Type a message..."
      />
      <button className="send-button" onClick={submit}>Send</button>
    </div>
  );
}

export default MessageInput;
