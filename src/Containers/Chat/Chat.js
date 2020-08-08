import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { useHistory } from 'react-router';
import { apiUrl } from '../../services/config';
import style from './Chat.module.css';

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import Player from '../Player/Player';
import Spinner from '../Spinner/Spinner';

let socket;

const Chat = () => {
  const currentUser = JSON.parse(window.localStorage.getItem('user'));
  const [showChatBox, setShowChatBox] = useState(1);
  const [curRoom, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const history = useHistory();

  const ENDPOINT = apiUrl;

  // collapse and display chatbox
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
  if (!currentUser || !socket) return <Spinner />;

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
  if (!currentUser || !socket) return <Spinner />;

  return (
    <div className={style.outerContainer}>
      <div className={style.videoContainer}>
        <Player socket={socket} />
      </div>
      <div className={style.container}>
        <InfoBar
          room={curRoom}
          collapse={() => {
            setShowChatBox(showChatBox ? 0 : 1);
          }}
        />
        <Messages messages={messages} name={currentUser?.name} visible={showChatBox} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
          visible={showChatBox}
        />
      </div>
    </div>
  );
};

export default Chat;
