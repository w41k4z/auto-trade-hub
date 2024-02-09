import React from 'react'

import ChatMenu from "./ChatMenu";
import Messages from "./Messages";

const Chat = () => {
  return (
      <div className="d-flex chat">
          <ChatMenu />
          <Messages />
    </div>
  )
}

export default Chat