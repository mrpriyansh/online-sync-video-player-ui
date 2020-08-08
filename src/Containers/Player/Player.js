import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const Player = ({ socket }) => {
  const [playerState, setplayerState] = useState({
    url: 'https://www.youtube.com/watch?v=wF_B_aagLfI',
    playing: false,
    played: 0,
    loaded: 0,
    duration: 0,
  });

  useEffect(() => {
    socket.emit('sendMessage', 'Working in Player', response => {});
  }, []);

  return <ReactPlayer url={playerState.url} width="100%" height="100%" controls={true} />;
};

export default Player;
