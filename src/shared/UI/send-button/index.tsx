import React from 'react'
import './styles/index.scss'

interface SendButtonProps {
  method: string
  onClick: () => void
}

const SendButton: React.FC<SendButtonProps> = ({
  method,
  onClick
}) => {
  return (
    <button
    className='send-button'
    type='button'
    onClick={onClick}
    >
      {method}
    </button>
  )
}

export default SendButton
