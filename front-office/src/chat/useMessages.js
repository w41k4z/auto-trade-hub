import { useState } from "react";

const useMessages = (client, userId) => { 

    const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (userDestinationId, message) => {
    const newMessage = {
      content: message,
      sender: userId,
      receiver: userDestinationId,
      timestamp: new Date()
    }
    client.publish({
      destination: '/chat-app/message',
      body: JSON.stringify(newMessage)
    });
    appendNewMessage(newMessage);
  };

  const appendNewMessage = (receivedMessage) => {
    setMessages((messages) => [...messages, receivedMessage]);
  };

  const handleMessageChange = (message) => {
    setMessage(message);
  };

  return { sendMessage, message, messages, handleMessageChange, appendNewMessage };
    
}

export default useMessages;