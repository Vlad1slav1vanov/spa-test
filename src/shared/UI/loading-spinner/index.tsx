import React from 'react'
import './styles/index.scss'

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-animation">
      <div className="spinner"></div>
    </div>
  )
}

export default LoadingSpinner
