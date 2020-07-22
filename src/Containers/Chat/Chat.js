import React, { useState, useEffect } from 'react';
import queryString from 'query-strings';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'localhost:4000';

  useEffect(() => {
    const { Name, Room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(Room);
    setName(Name);

    socket.emit('join', { name, room }, error => {
      if (error) {
        alert(error);
      }
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', Message => {
      setMessages(Messages => [...Messages, Message]);
    });

    socket.on('roomData', ({ Users }) => {
      setUsers(Users);
    });
  }, []);

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div>
      <h1>Chat</h1>
    </div>
  );
};

export default Chat;
