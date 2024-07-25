import React from 'react'
const heading={
    color:"blue",
    fontSize:"50px"
}

function Inline() {
  return (
    <div>
    <h1 className='error'>Error</h1>
      <h2 style={heading}>Hello</h2>
    </div>
  )
}

export default Inline
