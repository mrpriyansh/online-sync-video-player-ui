import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Join.module.css';

const Join = () => {
  const [room, setRoom] = useState('');

  return (
    <div className={styles.joinOuterContainer}>
      <div className={styles.joinInnerContainer}>
        <h1 className={styles.heading}>Create a Room</h1>
        <div>
          <input
            placeholder="Enter desired Room ID"
            className={`${styles.joinInput} ${styles.mt_20}`}
            type="text"
            onChange={e => setRoom(e.target.value)}
          />
        </div>
        <Link onClick={e => (!room ? e.preventDefault() : null)} to={`/watch?room=${room}`}>
          <button className={`${styles.button} ${styles.mt_20}`} type="submit">
            Join
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
