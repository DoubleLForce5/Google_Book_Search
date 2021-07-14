import React from 'react';
import Thumbnail from '../Thumbnail';
import './style.css';

function Card ({
  thumbnail,
  title,
  author,
  description
}) {
  return (
    <>
    <Thumbnail src={thumbnail} />
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
    </div>
    <div>
      <p>{description}</p>
    </div>
    </>
  )
}

export default Card; 