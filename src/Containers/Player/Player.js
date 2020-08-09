import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

import styles from './Player.module.css';

const Player = ({ socket, room }) => {
  const [playerState, setPlayerState] = useState({
    url: '',
    tempURL: '',
    playing: false,
    played: 0,
    loaded: 0,
    duration: 0,
    seeking: false,
  });
  const playerRef = useRef();
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (playerState.seeking) playerRef.current.seekTo(playerState.played, 'seconds');
    setPlayerState(prev => {
      return { ...prev, seeking: false };
    });
  }, [playerState.seeking]);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }
    if (playerState.seeking) return;

    socket.emit('setPlayPause', playerState.playing, playerState.played, response => {});
  }, [playerState.playing]);

  useEffect(() => {
    socket.on('getPlayPause', ({ isPlaying, time }) => {
      setPlayerState(prev => {
        return { ...prev, played: time, playing: isPlaying, seeking: true };
      });
    });

    socket.on('getURL', ({ URL }) => {
      setPlayerState(prev => {
        return { ...prev, url: URL };
      });
    });
    socket.on('sendAllInfo', () => {
      // socket.emit('sendURL', playerRef.current.props.url, () => {
      //   socket.emit(
      //     'setPlayPause',
      //     playerRef.current.props.playing,
      //     playerRef.current.getCurrentTime(),
      //     response => {}
      //   );
      // });
      socket.emit('sendURL', playerRef.current.props.url, () => {});
      setTimeout(() => {
        socket.emit(
          'setPlayPause',
          playerRef.current.props.playing,
          playerRef.current.getCurrentTime(),
          response => {}
        );
      }, 1000);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePlayPause = isPlaying => {
    setPlayerState(prev => {
      return { ...prev, playing: isPlaying, played: playerRef.current.getCurrentTime() };
    });
  };

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
        onPlay={() => {
          handlePlayPause(true);
        }}
        onPause={() => {
          handlePlayPause(false);
        }}
      />
      {/* <button
        onClick={() => {
          console.log('ab', playerRef.current);
        }}
      >
        check
      </button> */}
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
