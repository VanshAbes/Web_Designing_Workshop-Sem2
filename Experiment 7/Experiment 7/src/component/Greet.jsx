import React from 'react'

const Greet = (props) => {
  return (
    <div className='box'>
      <h3>{props.name}</h3>
      <p>{props.course}</p>
      <p>{props.marks}</p>
    </div>
  )
}

export default Greet