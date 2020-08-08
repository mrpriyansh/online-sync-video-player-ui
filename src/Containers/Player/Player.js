import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

const Player = ({ socket, videoUrl }) => {
  const [playerState, setPlayerState] = useState({
    url: 'https://www.youtube.com/watch?v=wF_B_aagLfI',
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
  return (
    <ReactPlayer
      ref={playerRef}
      url={playerState.url}
      width="100%"
      height="100%"
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
  );
};

export default Player;
