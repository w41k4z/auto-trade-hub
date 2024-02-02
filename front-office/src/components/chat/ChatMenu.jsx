import React from "react";
import UserChat from "./UserChat";

const ChatMenu = () => {
  return <section className="chat-menu">
    <header className="d-flex justify-content-between align-items-center py-1 px-2">
      <div className="d-flex align-items-center">
        <img src="" alt="Profil" />
        <p className="m-0 ms-2">John Doe</p>
      </div>
      <button>leave</button>
    </header>
    <div className="search ps-2 py-1">
      <input type="text" placeholder="Find a user..." />
    </div>
    <UserChat />
    <UserChat />
    <UserChat />
  </section>;
};

export default ChatMenu;
