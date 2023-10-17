import React from 'react'
import './ProgressBar.css'

function ProgressBar({ progress }) {
  return (
    <div className="progressBar-container" style={{ width: `${progress}%` }}>
      <div className="progressBar-fill"></div>
    </div>
  )
}

export default ProgressBar
