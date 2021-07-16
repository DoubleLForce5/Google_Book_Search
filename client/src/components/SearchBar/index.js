import React from 'react';
import './style.css';


function SearchBar (props) {
  return (
    <div className="searchBar d-flex border border-2 border-dark rounded flex-column p-3">
      <h4 className='text-center'>Book Search:</h4>
      <div className="input-group mb-3">
      <input type="text"
      onChange={props.onChange} 
      value={props.value}
      name='bookSearch'
      className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
      <button onClick={props.handleFormSubmit}className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
      </div>
    </div>
  )
}

export default SearchBar;