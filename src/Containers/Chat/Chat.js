import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { useHistory } from 'react-router';
import { useAuth } from '../../service/hooks/Auth';
import { apiUrl } from '../../service/config';
import style from './Chat.module.css';
// import TextContainer from '../TextContainer/TextContainer';

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;

const Chat = () => {
  // const { currentUser } = useAuth();
  const currentUser = JSON.parse(window.localStorage.getItem('user'));
  // console.log(currentUser);
  const [curRoom, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const history = useHistory();

  const ENDPOINT = apiUrl;

  // eslint-disable-next-line consistent-return
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

      return () => {
        socket.emit('disconnects', currentUser._id);
        socket.off();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ENDPOINT]);

  // console.log(socket);
  useEffect(() => {
    socket.on('message', newMessage => {
      setMessages(prevMessages => [...prevMessages, newMessage]);
    });
  }, []);
  if (!currentUser) return <p> Loading </p>;

  const sendMessage = event => {
    event.preventDefault();
    if (message) {
      // eslint-disable-next-line consistent-return
      socket.emit('sendMessage', message, response => {
        if (response?.error) {
          // eslint-disable-next-line no-alert
          alert(response.error.msg);
          return history.push('/');
        }
        setMessage('');
      });
    }
  };
  if (!currentUser) return <p> Loading </p>;

  return (
    <div className={style.outerContainer}>
      <div className={style.container}>
        <InfoBar room={curRoom} />
        <Messages messages={messages} name={currentUser?.name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      {/* <TextContainer users={users} /> */}
    </div>
  );
};

export default Chat;
