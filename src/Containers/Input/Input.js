import React from 'react';

import style from './Input.module.css';

const Input = ({ setMessage, sendMessage, message, visible }) => (
  <form className={style.form} style={{ opacity: visible }}>
    <input
      className={style.input}
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => (event.key === 'Enter' ? sendMessage(event) : null)}
    />
    <button className={style.sendButton} onClick={e => sendMessage(e)}>
      Send
    </button>
  </form>
);

export default Input;
