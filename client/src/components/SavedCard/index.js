import React from 'react';
import Thumbnail from '../Thumbnail';
import Button from '../Button'
import './style.css';

function savedCard ({
  thumbnail,
  title,
  author,
  description,
  onDelete,
  link
}) {
  return (
<div className="savedCard px-2 my-2">
      <div className="d-flex flex-row justify-content-between mt-1">
        <div>
          <p className="title m-0">{title}</p>
          <p className="authors">{author}</p>
        </div>
        <div className='btnContainer d-flex align-items-start'>
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Button  className='me-1' type='warning'>View</Button>
          </a>
    <Button onClick={onDelete} type='danger'>
      Remove
    </Button>
    </div>
      </div>
      <div className="d-flex flex-row">
        <Thumbnail src={thumbnail} />
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

export default savedCard; 