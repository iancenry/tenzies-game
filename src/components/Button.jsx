import React from 'react'

const Button = (props) => {
  return (
    <div className='btn' onClick={props.rollDice}>{props.tenzies ? "Reset Game": "Roll"}</div>
  )
}

export default Button