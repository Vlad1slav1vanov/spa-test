import React from 'react'
import './styles/index.scss'

interface FooterTitleProps {
  onClick: () => void
}

const FooterTitle: React.FC<FooterTitleProps> = ({ onClick }) => {
  return (
    <div
    className='footer-title'
    onClick={onClick}
    >
      <h2 className='footer-title__title'>
        история обращений
      </h2>
      <svg className='footer-title__arrow-icon' width="18" height="12" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.20001 6.4001L6.00001 1.6001L10.8 6.4001" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

export default FooterTitle
