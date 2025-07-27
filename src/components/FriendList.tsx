import { Friend } from "../App";

interface FriendListProps {
  friends: Friend[];
  selected: string;
  onSelect: (id: string) => void;
}

function FriendList({ friends, selected, onSelect }: FriendListProps) {
  return (
    <div className="friend-list">
      <h3>Friends</h3>
      <ul>
        {friends.map((f) => (
          <li
            key={f.id}
            className={`friend-list-item${
              selected === f.id ? " selected" : ""
            }`}
            onClick={() => onSelect(f.id)}
          >
            {f.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
