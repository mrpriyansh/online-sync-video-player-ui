import React from 'react';
import spinner from './spinner.gif';

export default () => {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: '200px', height: 'auto', margin: 'auto', display: 'block' }}
        alt="Loading..."
        width="100"
        height="100"
      />
    </div>
  );
};
