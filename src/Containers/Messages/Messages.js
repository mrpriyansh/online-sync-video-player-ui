import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import style from './Messages.module.css';

const Messages = ({ messages, name, visible }) => (
  <ScrollToBottom className={style.messages} style={{ opacity: visible }}>
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} visible={visible} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
