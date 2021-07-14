import React from 'react';


function SearchBar (props) {
  // console.log(props)
  return (
    <div className="container-md d-flex align-items-center border border-dark flex-column mt-4 mb-4 pb-5 pt-2">
      <h4>Book Search</h4>
      <p>Book:</p>
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