import { Link } from "react-router-dom";
import ChatRoom from "./ChatRoom";
import List from "./List";
import Logo from "./Logo";

function RoomBar() {
  return (
    <aside aria-label="Sidebar">
      <div class="px-1 py-0 min-h-[95vh] overflow-y-auto  bg-beauty dark:bg-gray-800">
        <Logo />
        <List />
        <ChatRoom />
      </div>
    </aside>
  );
}

export default RoomBar;
