import React from 'react'
import './styles/index.scss'

interface SuccessMessageProps {
  message: string
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message }) => {
  return (
    <div className="success-message">
      {message}
    </div>
  )
}

export default SuccessMessage
