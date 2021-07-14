import React from 'react';
import './style.css';

function Card ({
  thumbnail,
  title,
  author,
  description
}) {
  return (
    <>
    <div>
      <h1>{title}</h1>
      <p>author</p>
    </div>
    <div>
      <p>description</p>
    </div>
    </>
  )
}

export default Card; 