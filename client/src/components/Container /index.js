import React from 'react'

function Container (props) {
  return (
    <div className="container-md d-flex align-items-center border border-dark flex-column mt-4 mb-4 pb-5 pt-2">
      {props.children}
    </div>
  )
}

export default Container;