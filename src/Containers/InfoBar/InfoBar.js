import React from 'react';

import onlineIcon from '../../Utils/onlineIcon.png';
import closeIcon from '../../Utils/closeIcon.png';

import style from './InfoBar.module.css';

const InfoBar = ({ room }) => (
  <div className={style.infoBar}>
    <div className={style.leftInnerContainer}>
      <img className={style.onlineIcon} src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className={style.rightInnerContainer}>
      <a href="/">
        <img src={closeIcon} alt="close icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
