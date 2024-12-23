import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import User from './User';
import ChatBoxReceiver, { ChatBoxSender } from './ChatBoxReceiver'; // Fixed import path
import InputText from './InputText'; // Fixed component name

const socketio = socketIOClient("http://localhost:8080");

export default function ChatContainer() { // Fixed component name

  const [chats, setChats] = useState([]);
  const [user, setUser] = useState(localStorage.getItem("user") || "");
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");

  useEffect(() => {
    socketio.on('chat', (senderChats) => {
      console.log('Received chats from server:', senderChats);
      if (Array.isArray(senderChats)) {
        setChats(senderChats.map(chat => {
          const newChat = {
            ...chat,
            message: chat.message.toString() // Ensure message is a string
          };
          console.log('Processed chat:', newChat);
          return newChat;
        }));
      } else {
        console.error('Received data is not an array:', senderChats);
      }
    });
  
    return () => {
      socketio.off('chat');
    };
  }, []);
  
  

  function sendChatToSocket(chat) {
    socketio.emit('chat', chat);
  }

  const addMsg = (message) => {
    const newChat = { user, avatar, message:message.toString() };
    console.log('Adding new message:', newChat);
    const updatedChats = [...chats, newChat];
    console.log('Updated chats:', updatedChats);
    setChats(updatedChats);
    sendChatToSocket(updatedChats);
  };

  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    setUser("");
    setAvatar("");
  }

  function ChatList() {
    return chats.map((chat, i) => {
      console.log('Rendering chat:', chat); 
      if (typeof chat.message === 'object') 
        { 
          console.error('Message is an object:', chat.message); 
        }
           else { 
            console.log('Message is a string:', chat.message); 
          }




      if (chat.user === user) {
        return <ChatBoxSender key={i} avatar={chat.avatar} user={chat.user} message={chat.message} />;
      }
      return <ChatBoxReceiver key={i} avatar={chat.avatar} user={chat.user} message={chat.message} />;
    });
  }

  return (
    <div>
      {user ? (
        <div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <h4>{user}</h4>
            <p onClick={logout} style={{ color: "blanchedalmond", cursor: "pointer" }}>logout</p>
          </div>
          <ChatList />
          <InputText addMsg={addMsg} />
        </div>
      ) : (
        <User setUser={setUser} />
      )}
    </div>
  );
}
