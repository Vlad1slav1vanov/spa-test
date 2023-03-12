import React from 'react'
import './style/index.scss'

interface ApplyMessageProps {
  message: string
  isError: boolean
}

const ApplyMessage: React.FC<ApplyMessageProps> = ({
  message,
  isError
}) => {
  return (
    <div className={`apply-message ${isError ? 'error' : ''}`}>
      {message}
    </div>
  )
}

export default ApplyMessage
