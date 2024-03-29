import React from 'react';
import './style.css';

function Thumbnail({ src }) {
  return (
    <div
      className="img-thumbnail"
      role="img"
      aria-label="Book Image"
      style={{
        backgroundImage: `url(${src})`
      }}
    />
  );
}

export default Thumbnail;
