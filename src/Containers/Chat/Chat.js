import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { useAuth } from '../../service/hooks/Auth';
import { apiUrl } from '../../service/config';
import style from './Chat.module.css';
// import TextContainer from '../TextContainer/TextContainer';

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;

const Chat = () => {
  const { currentUser } = useAuth();
  const [curRoom, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = apiUrl;

  useEffect(() => {
    const { room } = queryString.parse(window.location.search);
    socket = io(ENDPOINT);
    setRoom(room);

    if (currentUser) {
      socket.emit('join', { userId: currentUser._id, room }, error => {
        if (error) {
          alert(error);
        }
      });
    }

    // return () => {
    //   socket.emit('disconnect');
    //   socket.off();
    // };
  }, [currentUser]);

  useEffect(() => {
    socket.on('message', newMessage => {
      setMessages(prevMessages => [...prevMessages, newMessage]);
    });
  }, []);

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className={style.outerContainer}>
      <div className={style.container}>
        <InfoBar room={curRoom} />
        <Messages messages={messages} name={currentUser ? currentUser.name : null} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      {/* <TextContainer users={users} /> */}
    </div>
  );
};

export default Chat;
