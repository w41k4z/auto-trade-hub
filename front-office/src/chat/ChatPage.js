import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import reportWebVitals from '../reportWebVitals';
import UserChat from './UserChat';
import Messages from './Messages';
import Chat from './Chat';
import ChatMenu from './ChatMenu';


const ChatPage =() => {
  return(
    <><ChatMenu/>
    <Chat/>
    <Messages/>
    <UserChat/></>
  );

}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default ChatPage;
