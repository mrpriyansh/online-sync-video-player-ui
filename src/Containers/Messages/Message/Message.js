import React from 'react';
import ReactEmoji from 'react-emoji';

import style from './Message.module.css';

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) isSentByCurrentUser = true;

  return isSentByCurrentUser ? (
    <div className={`${style.messageContainer} ${style.justifyEnd}`}>
      <p className={`${style.sentText} ${style.pr_10}`}>{trimmedName}</p>
      <div className={`${style.messageBox} ${style.backgroundBlue}`}>
        <p className={`${style.messageText} ${style.colorWhite}`}>{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className={`${style.messageContainer} ${style.justifyStart}`}>
      <div className={`${style.messageBox} ${style.backgroundLight}`}>
        <p className={`${style.messageText} ${style.colorDark}`}>{ReactEmoji.emojify(text)}</p>
      </div>
      <p className={`${style.sentText} ${style.pl_10}`}>{user}</p>
    </div>
  );
};

export default Message;
