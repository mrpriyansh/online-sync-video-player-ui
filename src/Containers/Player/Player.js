import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const Player = ({ socket }) => {
  const [playerState, setPlayerState] = useState({
    url: 'https://www.youtube.com/watch?v=wF_B_aagLfI',
    playing: false,
    played: 0,
    loaded: 0,
    duration: 0,
  });

  useEffect(() => {
    // socket.emit('sendMessage', 'Working in Player', response => {});
    socket.on('getPlayPause', time => {
      setPlayerState(prev => {
        return { ...prev, played: time, playing: !playerState.playing };
      });
    });
    // socket.on('message', message => console.log(message));
  }, []);

  const handleProgress = currentTime => {
    setPlayerState(prev => {
      return { ...prev, played: currentTime.played };
    });
  };

  const handlePlayPause = () => {
    setPlayerState(prev => {
      return { ...prev, playing: !playerState.playing };
    });
    // socket.emit('setPlayPause', playerState.played, response => {});
    // socket.emit('sendMessage', `${playerState.playing}`);
  };

  return (
    <ReactPlayer
      url={playerState.url}
      width="100%"
      height="100%"
      controls={true}
      playing={playerState.playing}
      onProgress={handleProgress}
      onPlay={handlePlayPause}
      onPause={handlePlayPause}
    />
  );
};

export default Player;
