import { useEffect, useState } from "react";
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

const SOCKET_URL = "https://auto-trade-hub.up.railway.app/back-office/secured/room";
const TOPIC_PREFIX = "/private/queue/user/";

const socket = new SockJS(SOCKET_URL);
const client = new Client({
    webSocketFactory: () => socket,
    debug: (str) => {
      console.log(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
  });


const useChat = (userId) => {

  useEffect(() => {
    let unsubscription = null;
    client.onConnect = (frame) => {
      console.log('Connection established successfully: ' + frame);
      unsubscription = client.subscribe(TOPIC_PREFIX + userId, (receivedMessage) => {
        appendNewMessage(JSON.parse(receivedMessage.body));
      });
    };
    client.activate();

    return () => {
      if (unsubscription !== null) {
        unsubscription.unsubscribe();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    handleMessageChange("");
  };

  const appendNewMessage = (receivedMessage) => {
    setMessages((messages) => [...messages, receivedMessage]);
  };

  const handleMessageChange = (message) => {
    setMessage(message);
  };

  const disconnect = () => {
    if (client !== null) {
      client.deactivate();
    };
  };

  return { sendMessage, message, messages, handleMessageChange, disconnect };
};

export default useChat;
