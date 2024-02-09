import { useEffect, useState } from "react";
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import useSelector from "react-redux";
import { selectUser } from "../redux/reducer/UserSlice";

const SOCKET_URL = "http://localhost:8080/auto-trade-hub/secured/room";
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


const useChat = () => {
  const user = useSelector(selectUser)

  useEffect(() => {
    let unsubscription = null;
    client.onConnect = (frame) => {
      console.log('Connection established successfully: ' + frame);
      unsubscription = client.subscribe(TOPIC_PREFIX + user.email, (receivedMessage) => {
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
      sender: user?.email,
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

  return { user, sendMessage, message, messages, handleMessageChange, disconnect };
};

export default useChat;
