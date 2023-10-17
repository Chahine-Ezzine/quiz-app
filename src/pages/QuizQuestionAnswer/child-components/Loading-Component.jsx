import React from 'react'

function LoadingComponent({ gifUrl }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <iframe
        src={gifUrl}
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
        width="500px"
        height="500px"
      ></iframe>
    </div>
  )
}

export default LoadingComponent
