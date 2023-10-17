import React from 'react'
import './ErrorComponent.css'

function ErrorComponent({ error }) {
  return (
    <div className="error-component">
      <h3>Oops! An error occurred.</h3>
      <p>{error}</p>
    </div>
  )
}

export default ErrorComponent
