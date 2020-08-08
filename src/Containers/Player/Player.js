import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

import styles from './Player.module.css';

const Player = ({ socket }) => {
  const [playerState, setPlayerState] = useState({
    url: 'https://youtu.be/xUPHAVYEVOY',
    tempURL: '',
    playing: false,
    played: 0,
    loaded: 0,
    duration: 0,
  });
  const playerRef = useRef();

  useEffect(() => {
    // socket.emit('sendMessage', 'Working in Player', response => {});
    socket.on('getPlayPause', (isPlaying, time) => {
      setPlayerState(prev => {
        return { ...prev, played: time, playing: isPlaying };
      });
      playerRef.current.seekTo(time, 'fraction');
    });

    // socket.on('message', message => console.log(message));
    playerRef.current.seekTo(10);

    socket.on('getURL', ({ URL }) => {
      setPlayerState(prev => {
        return { ...prev, url: URL };
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleProgress = currentTime => {
    setPlayerState(prev => {
      return { ...prev, played: currentTime.played };
    });
  };

  const handlePlayPause = isPlaying => {
    setPlayerState(prev => {
      return { ...prev, playing: isPlaying };
    });
    console.log('a', playerState.playing, playerState.played, isPlaying);
    socket.emit('setPlayPause', isPlaying, playerState.played);
    // socket.emit('sendMessage', `${isPlaying} ${playerState.played}`);

    //   return { ...prev, playing: !playerState.playing };
    // });
    // socket.emit('setPlayPause', playerState.played, response => {});
    // socket.emit('sendMessage', `${playerState.playing}`);
  };

  // const handleButton = e => {
  //   e.preventDefault();
  //   playerRef.current.seekTo(20, 'seconds');
  // };

  // jugaad :(

  const setURL = URL => {
    setPlayerState(prev => {
      return { ...prev, tempURL: URL };
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    socket.emit('sendURL', playerState.tempURL, () => {});
  };

  return (
    <React.Fragment>
      <ReactPlayer
        ref={playerRef}
        url={playerState.url}
        width="100%"
        height="91%"
        controls={true}
        playing={playerState.playing}
        onProgress={handleProgress}
        onPlay={() => {
          handlePlayPause(true);
        }}
        onPause={() => {
          handlePlayPause(false);
        }}
      />
      <form className={styles.form} onSubmit={e => onSubmit(e)}>
        <input
          className={styles.input}
          placeholder="Enter video URL"
          onChange={e => setURL(e.target.value)}
        />
        <button className={styles.sendButton}>Submit</button>
      </form>
    </React.Fragment>
  );
};

export default Player;
