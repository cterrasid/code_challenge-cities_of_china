import React from 'react'
import './styles.scss'

const Counter = () => {
  return (
    <section className="counter__container">
      <p className="counter__counter">x items selected</p>
      <button className="counter__clear-button" type="button">
        Clear
      </button>
    </section>
  )
}

export default Counter
