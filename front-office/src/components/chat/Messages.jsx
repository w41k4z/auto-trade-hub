import React from "react";
import useChat from "./useChat";

const Messages = () => {
  const sender = window.location.pathname.split("/")[1]
  const receiver = window.location.pathname.split("/")[2]
  const {
    sendMessage,
    message,
    messages,
    handleMessageChange,
  } = useChat(sender);

  return (
    <section className="message-section">
      <header className="py-1 px-2 d-flex align-items-center">
        <p className="m-0 text-white">current_target_name</p>
      </header>
      <div className="messages pt-2">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === sender ? "owner" : ""}`}>
            <div className="message-info">
              <img src="" alt="" />
              <span>just now</span>
            </div>
            <div className="message-content">
              <p>
                {message.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex send">
        <textarea type="text" value={message} placeholder="Type something..." onChange={e => handleMessageChange(e.target.value)} />
        <button onClick={() => sendMessage(receiver, message)}>Send</button>
      </div>
    </section>
  );
};

export default Messages;