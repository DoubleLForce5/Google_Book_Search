import React from 'react';
import Thumbnail from '../Thumbnail';
import Button from '../Button'
import './style.css';

function SearchCard ({
  thumbnail,
  title,
  author,
  description,
  onSave,
  link
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
      Save
    </Button>
      <a href={link} target="_blank" rel='noopener noreferrer'>
      <Button >
        View
      </Button>
      </a>
    </>
  )
}

export default SearchCard; 