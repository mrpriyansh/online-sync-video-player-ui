import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';

const Player = ({ socket }) => {
  useEffect(() => {
    socket.emit('sendMessage', 'Working in Player', response => {});
  }, []);

  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=wF_B_aagLfI"
      width="100%"
      height="100%"
      controls={true}
    />
  );
};

export default Player;
