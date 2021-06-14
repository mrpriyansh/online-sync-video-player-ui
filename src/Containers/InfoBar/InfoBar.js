import React from 'react';

import onlineIcon from '../../Utils/onlineIcon.png';
import style from './InfoBar.module.css';

const InfoBar = ({ room, collapse }) => (
  <div className={style.infoBar}>
    <div className={style.leftInnerContainer}>
      <img className={style.onlineIcon} src={onlineIcon} alt="online icon" width="10" height="10" />
      <h3>{room}</h3>
    </div>
    <button className={style.button} onClick={collapse}>
      ^
    </button>
  </div>
);

export default InfoBar;
