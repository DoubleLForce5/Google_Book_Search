import React from 'react';
import Thumbnail from '../Thumbnail';
import Button from '../Button'
import './style.css';

function Card ({
  thumbnail,
  title,
  author,
  description,
  onSave
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
    <Button onClick={onSave} >
      save
    </Button>
    </>

  )
}

export default Card; 