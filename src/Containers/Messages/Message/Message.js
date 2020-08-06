import React from 'react';
import ReactEmoji from 'react-emoji';

import style from './Message.module.css';

const Message = ({ message: { user, text }, name, visible }) => {
  let isSentByCurrentUser = false;

  if (user === name) isSentByCurrentUser = true;

  return isSentByCurrentUser ? (
    <div className={`${style.messageContainer} ${style.justifyEnd}`} style={{ opacity: visible }}>
      {!isSentByCurrentUser && (
        <p className={`${style.sentText} ${style.pr_10}`}>{name.split(' ')[0]}</p>
      )}
      <div className={`${style.messageBox} ${style.backgroundBlue}`}>
        <p className={`${style.messageText} ${style.colorWhite}`}>{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className={`${style.messageContainer} ${style.justifyStart}`} style={{ opacity: visible }}>
      <div className={`${style.messageBox} ${style.backgroundLight}`}>
        <p className={`${style.messageText} ${style.colorWhite}`}>{ReactEmoji.emojify(text)}</p>
      </div>
      <p className={`${style.sentText} ${style.pl_10}`}>{user}</p>
    </div>
  );
};

export default Message;
