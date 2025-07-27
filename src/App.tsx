import { useState } from "react";
import FriendList from "./components/FriendList";
import ChatWindow from "./components/ChatWindow";
import "./App.css";

export type Friend = { id: string; name: string };
export type Message = {
  sender: "me" | "friend";
  content: string;
  timestamp: Date;
};

export const defaultFriends: Friend[] = [
  { id: "1", name: "Tom" },
  { id: "2", name: "Jerry" },
  { id: "3", name: "Harry" },
];

type Chats = Record<string, Message[]>;

function App() {
  const [friends] = useState(defaultFriends);
  const [active, setActive] = useState(friends[0].id);
  const [chats, setChats] = useState<Chats>(() => ({
    "1": [],
    "2": [],
    "3": [],
  }));

  const handleSend = (text: string) => {
    setChats((prev) => ({
      ...prev,
      [active]: [
        ...prev[active],
        {
          sender: "me",
          content: text,
          timestamp: new Date(),
        },
      ],
    }));
  };

  return (
    <div className="app-container">
      <FriendList friends={friends} selected={active} onSelect={setActive} />
      <ChatWindow
        friend={friends.find((f) => f.id === active)!}
        messages={chats[active]}
        onSend={handleSend}
      />
    </div>
  );
}

export default App;
